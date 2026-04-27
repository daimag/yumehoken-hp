import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

/**
 * お問い合わせフォーム送信API
 *
 * 環境変数（任意・未設定時はコンソールログのみで成功扱い）:
 *   SMTP_HOST           — SMTPサーバ
 *   SMTP_PORT           — SMTPポート（既定 587）
 *   SMTP_USER           — SMTPログインユーザ
 *   SMTP_PASS           — SMTPパスワード
 *   SMTP_FROM           — 送信元アドレス（既定 SMTP_USER と同じ）
 *   CONTACT_TO          — 送信先（既定 yume@yumehoken.jp）
 */

const TYPE_LABELS: Record<string, string> = {
  personal: "一般のお客様（保険のご相談）",
  shukatsu: "終活ステーション",
  business: "法人のお客様（リスクヘッジ等）",
  recruit: "採用に関するお問い合わせ",
  other: "その他",
}

type Payload = {
  type?: string
  name?: string
  kana?: string
  company?: string
  email?: string
  phone?: string
  preferredMethod?: string
  subject?: string
  message?: string
  consent?: boolean
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function buildPlainTextBody(p: Payload): string {
  const typeLabel = TYPE_LABELS[p.type ?? ""] || p.type || "—"
  return [
    "■ お問い合わせ種別",
    typeLabel,
    "",
    "■ お名前",
    p.name ?? "—",
    "",
    "■ ふりがな",
    p.kana ?? "—",
    "",
    "■ 貴社名",
    p.company ?? "—",
    "",
    "■ メールアドレス",
    p.email ?? "—",
    "",
    "■ お電話番号",
    p.phone ?? "—",
    "",
    "■ ご希望の連絡方法",
    p.preferredMethod ?? "—",
    "",
    "■ 件名",
    p.subject ?? "—",
    "",
    "■ お問い合わせ内容",
    p.message ?? "—",
    "",
    "—",
    "ゆめほけん（ドリームインシュアランス株式会社）お問い合わせフォームより自動送信",
  ].join("\n")
}

export async function POST(req: NextRequest) {
  let payload: Payload
  try {
    payload = (await req.json()) as Payload
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません" },
      { status: 400 }
    )
  }

  // バリデーション
  if (!payload.consent) {
    return NextResponse.json(
      { error: "個人情報の取扱いに関する同意が必要です" },
      { status: 400 }
    )
  }
  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { error: "必須項目（お名前・メール・お問い合わせ内容）を入力してください" },
      { status: 400 }
    )
  }
  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません" },
      { status: 400 }
    )
  }

  const body = buildPlainTextBody(payload)
  const subject =
    `[ゆめほけんHP] ${TYPE_LABELS[payload.type ?? ""] || "お問い合わせ"}` +
    (payload.subject ? ` - ${payload.subject}` : "")

  // SMTP設定がない場合はログ出力して成功扱い（プロトタイプモード）
  const host = process.env.SMTP_HOST
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  if (!host || !user || !pass) {
    console.log("=== お問い合わせ受信（SMTP未設定・プロトタイプモード） ===")
    console.log("Subject:", subject)
    console.log(body)
    console.log("=========================================================")
    return NextResponse.json({ ok: true, mode: "prototype" })
  }

  // 本番モード：nodemailer で送信
  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT ?? 587) === 465,
      auth: { user, pass },
    })

    const from = process.env.SMTP_FROM || user
    const to = process.env.CONTACT_TO || "yume@yumehoken.jp"

    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject,
      text: body,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact form mail error:", err)
    return NextResponse.json(
      { error: "メール送信中にエラーが発生しました。お手数ですが直接お電話ください。" },
      { status: 500 }
    )
  }
}
