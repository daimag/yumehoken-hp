"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      tel: formData.get("tel"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(result.error ?? "送信に失敗しました。")
      }

      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "送信に失敗しました。"
      )
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-stone-200 border-l-4 border-l-[#f59e0b] rounded-sm p-8 md:p-10">
        <div className="flex items-start mb-4">
          <CheckCircle2 className="h-8 w-8 text-[#f59e0b] flex-shrink-0 mr-3" />
          <h2 className="text-xl md:text-2xl font-bold text-[#1a365d]">
            お問い合わせを受け付けました
          </h2>
        </div>
        <p className="text-stone-700 leading-loose">
          この度はお問い合わせいただき、誠にありがとうございます。<br />
          内容を確認の上、担当者より改めてご連絡させていただきます。
        </p>
        <p className="text-sm text-stone-500 mt-6 leading-relaxed">
          ご入力のメールアドレス宛に自動返信メールをお送りしています。<br />
          届かない場合は迷惑メールフォルダもご確認ください。
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-stone-700 mb-2"
        >
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-sm disabled:bg-stone-100"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-stone-700 mb-2"
        >
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-sm disabled:bg-stone-100"
          placeholder="株式会社○○"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-stone-700 mb-2"
          >
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-sm disabled:bg-stone-100"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="tel"
            className="block text-sm font-semibold text-stone-700 mb-2"
          >
            電話番号
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            disabled={status === "submitting"}
            className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-sm disabled:bg-stone-100"
            placeholder="083-000-0000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-semibold text-stone-700 mb-2"
        >
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-sm bg-white disabled:bg-stone-100"
          defaultValue=""
        >
          <option value="" disabled>
            選択してください
          </option>
          <option value="estimate">お見積り依頼</option>
          <option value="civil">土木工事について</option>
          <option value="piping">管工事について</option>
          <option value="water">水道施設工事について</option>
          <option value="recruit">採用について</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-stone-700 mb-2"
        >
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={status === "submitting"}
          className="w-full px-4 py-3 border border-stone-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#1a365d] focus:border-transparent text-sm resize-y disabled:bg-stone-100"
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-sm text-sm"
        >
          {errorMessage}
        </div>
      )}

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full md:w-auto inline-flex items-center justify-center bg-[#1a365d] hover:bg-[#0f2441] text-white px-10 py-4 rounded-sm font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "送信中..." : "送信する"}
        </button>
        <p className="text-xs text-stone-500 mt-3 leading-relaxed">
          ご入力いただいた個人情報は、お問い合わせへの対応・ご連絡以外の目的には使用いたしません。
        </p>
      </div>
    </form>
  )
}
