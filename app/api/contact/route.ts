import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const SUBJECT_LABELS: Record<string, string> = {
  estimate: "お見積り依頼",
  civil: "土木工事について",
  piping: "管工事について",
  water: "水道施設工事について",
  recruit: "採用について",
  other: "その他",
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, tel, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "必須項目が未入力です。" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません。" },
        { status: 400 }
      )
    }

    const subjectLabel = SUBJECT_LABELS[subject] ?? subject

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER
    const contactEmail = process.env.CONTACT_EMAIL

    await transporter.sendMail({
      from: `"大上設備 お問い合わせフォーム" <${fromAddress}>`,
      to: contactEmail,
      replyTo: email,
      subject: `【お問い合わせ】${subjectLabel} - ${name} 様`,
      text: [
        "大上設備のお問い合わせフォームから新しいお問い合わせがありました。",
        "",
        "■ お名前",
        name,
        "",
        "■ 会社名",
        company || "（未入力）",
        "",
        "■ メールアドレス",
        email,
        "",
        "■ 電話番号",
        tel || "（未入力）",
        "",
        "■ お問い合わせ種別",
        subjectLabel,
        "",
        "■ お問い合わせ内容",
        message,
        "",
        "---",
        "このメールは oouesetsubi.jp のお問い合わせフォームから自動送信されています。",
      ].join("\n"),
    })

    await transporter.sendMail({
      from: `"株式会社大上設備" <${fromAddress}>`,
      to: email,
      subject: "お問い合わせを受け付けました - 株式会社大上設備",
      text: [
        `${name} 様`,
        "",
        "この度は株式会社大上設備へお問い合わせいただき、誠にありがとうございます。",
        "以下の内容でお問い合わせを受け付けました。",
        "内容を確認の上、担当者より改めてご連絡させていただきます。",
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "■ お問い合わせ内容",
        "━━━━━━━━━━━━━━━━━━━━",
        "",
        `お問い合わせ種別: ${subjectLabel}`,
        "",
        message,
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        "",
        "※本メールは自動送信です。ご返信いただいてもお答えできません。",
        "※お急ぎの場合はお電話（083-223-4311 / 平日 8:30-17:30）までご連絡ください。",
        "",
        "──────────────────────",
        "株式会社大上設備",
        "〒751-0805 山口県下関市一の宮住吉3丁目3-25",
        "TEL: 083-223-4311 / FAX: 083-223-4313",
        "https://oouesetsubi.jp",
        "──────────────────────",
      ].join("\n"),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "送信に失敗しました。しばらく経ってから再度お試しください。" },
      { status: 500 }
    )
  }
}
