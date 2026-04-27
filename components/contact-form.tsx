"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { Send, Loader2 } from "lucide-react"

type ContactType = "personal" | "shukatsu" | "business" | "recruit" | "other"

const contactTypeOptions: { value: ContactType; label: string }[] = [
  { value: "personal", label: "一般のお客様（保険のご相談）" },
  { value: "shukatsu", label: "終活ステーション" },
  { value: "business", label: "法人のお客様（リスクヘッジ等）" },
  { value: "recruit", label: "採用に関するお問い合わせ" },
  { value: "other", label: "その他" },
]

const contactMethodOptions = ["メール", "電話", "どちらでも可"] as const

export default function ContactForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const initialType = (searchParams.get("type") as ContactType) || "personal"
  const initialService = searchParams.get("service") || ""

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    type: initialType as ContactType,
    name: "",
    kana: "",
    company: "",
    email: "",
    phone: "",
    preferredMethod: "メール" as (typeof contactMethodOptions)[number],
    subject: initialService ? `${initialService} について` : "",
    message: "",
    consent: false,
  })

  useEffect(() => {
    const t = searchParams.get("type") as ContactType | null
    if (t) setForm((prev) => ({ ...prev, type: t }))
  }, [searchParams])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      setForm({ ...form, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.consent) {
      setError("個人情報の取扱いに関する同意をお願いします。")
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || "送信に失敗しました")
      }

      router.push("/contact/thanks")
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "送信中にエラーが発生しました。お手数ですが、お電話でもお問い合わせいただけます。"
      )
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white border border-stone-200 rounded-lg p-6 md:p-10 shadow-sm"
      noValidate
    >
      {/* お問い合わせ種別 */}
      <div>
        <label htmlFor="type" className="block text-sm font-bold text-[#3D3D3D] mb-2">
          お問い合わせ種別 <span className="text-[#DC2626]">*</span>
        </label>
        <select
          id="type"
          name="type"
          value={form.type}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-stone-300 rounded-md bg-white text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
        >
          {contactTypeOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* お名前 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#3D3D3D] mb-2">
            お名前 <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="山田 太郎"
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="kana" className="block text-sm font-bold text-[#3D3D3D] mb-2">
            ふりがな
          </label>
          <input
            type="text"
            id="kana"
            name="kana"
            value={form.kana}
            onChange={handleChange}
            placeholder="やまだ たろう"
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
          />
        </div>
      </div>

      {/* 会社名（法人の場合） */}
      {form.type === "business" && (
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-[#3D3D3D] mb-2">
            貴社名 <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            required={form.type === "business"}
            placeholder="株式会社○○"
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
          />
        </div>
      )}

      {/* メール / 電話 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[#3D3D3D] mb-2">
            メールアドレス <span className="text-[#DC2626]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="example@email.com"
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-[#3D3D3D] mb-2">
            お電話番号
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="090-1234-5678"
            className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
          />
        </div>
      </div>

      {/* ご連絡方法 */}
      <div>
        <span className="block text-sm font-bold text-[#3D3D3D] mb-2">
          ご希望の連絡方法
        </span>
        <div className="flex flex-wrap gap-4">
          {contactMethodOptions.map((m) => (
            <label
              key={m}
              className="inline-flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="preferredMethod"
                value={m}
                checked={form.preferredMethod === m}
                onChange={handleChange}
                className="w-4 h-4 text-[#95C11F] focus:ring-[#95C11F]"
              />
              <span className="text-sm text-stone-700">{m}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 件名 */}
      <div>
        <label htmlFor="subject" className="block text-sm font-bold text-[#3D3D3D] mb-2">
          件名
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="ご相談・ご質問の件名"
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent"
        />
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-[#3D3D3D] mb-2">
          お問い合わせ内容 <span className="text-[#DC2626]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="ご相談内容をお書きください"
          className="w-full px-4 py-3 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#95C11F] focus:border-transparent resize-y"
        />
      </div>

      {/* 個人情報同意 */}
      <div className="bg-[#FAF7F0] border border-stone-200 rounded-md p-5">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            required
            className="w-5 h-5 mt-0.5 text-[#95C11F] focus:ring-[#95C11F] rounded"
          />
          <span className="text-sm text-stone-700 leading-relaxed">
            <a
              href="/policies/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5C7A14] underline hover:text-[#95C11F]"
            >
              個人情報保護に関する基本方針
            </a>
            に同意の上、送信します。 <span className="text-[#DC2626]">*</span>
          </span>
        </label>
      </div>

      {/* エラー */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* 送信ボタン */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] disabled:bg-stone-400 text-white px-8 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            送信中...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            上記の内容で送信する
          </>
        )}
      </button>

      <p className="text-xs text-stone-500 text-center">
        ※ 通常 1〜2 営業日以内にご返信いたします。
      </p>
    </form>
  )
}
