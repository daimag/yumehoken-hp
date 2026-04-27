import Link from "next/link"
import type { Metadata } from "next"
import {
  AlertTriangle,
  Phone,
  Clock,
  Car,
  ShieldAlert,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "事故・トラブル時の対応｜ゆめほけん",
  description:
    "ゆめほけん（ドリームインシュアランス）の事故・自動車トラブル時の対応案内。各保険会社の24時間サポートデスク・夜間休日連絡先・レッカーサービスの電話番号を掲載しています。",
  openGraph: {
    title: "事故・トラブル時の対応｜ゆめほけん",
    description: "事故・故障時の連絡先と対応の流れ。",
  },
}

// 事故時の保険会社サポートデスク（24時間）
const accidentDesks = [
  {
    company: "損保ジャパン",
    tel: "0120-256-110",
    label: "事故サポートセンター",
  },
  {
    company: "東京海上日動",
    tel: "0120-119-110",
    label: "事故受付センター",
  },
]

// レッカー・自動車トラブル
const towingDesks = [
  {
    company: "損保ジャパン ロードアシスト",
    tel: "0120-365-110",
    label: "レッカー・故障時のロードサービス",
  },
  {
    company: "東京海上日動 ロードアシスト",
    tel: "0120-560-057",
    label: "レッカー・故障時のロードサービス",
  },
]

// 事故時の対応ステップ
const accidentSteps = [
  {
    step: "01",
    title: "安全確保 / 負傷者救護",
    description:
      "まずは身の安全を確保し、負傷者がいる場合は119番（救急）に通報。二次事故防止のため、可能なら車両を安全な場所に。",
  },
  {
    step: "02",
    title: "警察へ連絡（110番）",
    description:
      "人身事故・物損事故いずれも、必ず警察へ届け出てください。事故証明書の発行に必要です。",
  },
  {
    step: "03",
    title: "相手の情報を確認",
    description:
      "相手の氏名・住所・電話番号・車両番号・保険会社名を確認。可能なら現場写真も撮影しておきましょう。",
  },
  {
    step: "04",
    title: "保険会社のサポートデスクへ連絡",
    description:
      "上記の事故サポートセンター（24時間対応）へ連絡。状況をお伝えください。",
  },
  {
    step: "05",
    title: "ゆめほけんへもご連絡",
    description:
      "営業時間内（月〜金 9:00〜17:00）にゆめほけん（093-965-0660）までご連絡いただけると、その後の手続きをサポートします。",
  },
]

export default function SupportPage() {
  return (
    <>
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-red-50 via-[#FAF7F0] to-[#F4F8E8] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-5">
            <AlertTriangle className="w-8 h-8 text-red-700" aria-hidden="true" />
          </div>
          <p className="text-red-700 text-sm font-semibold tracking-[0.3em] mb-3">
            EMERGENCY SUPPORT
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-3 leading-tight">
            事故・トラブル時の対応
          </h1>
          <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
          <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            事故・自動車トラブルが発生した際は、まず落ち着いて以下の連絡先までご連絡ください。
            各保険会社のサポートデスクは <strong className="text-red-700">24時間対応</strong> しています。
          </p>
        </div>
      </section>

      {/* 緊急連絡先（最優先） */}
      <section className="bg-white py-14 md:py-16" aria-labelledby="emergency-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-6 h-6 text-red-700" aria-hidden="true" />
            <h2
              id="emergency-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D]"
            >
              事故時のサポートデスク（24時間）
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {accidentDesks.map((d) => (
              <div
                key={d.company}
                className="bg-white border-2 border-red-200 rounded-lg p-6 md:p-7"
              >
                <p className="text-xs font-semibold text-red-700 tracking-widest mb-1">
                  {d.company}
                </p>
                <p className="text-sm text-stone-600 mb-3">{d.label}</p>
                <a
                  href={`tel:${d.tel.replace(/-/g, "")}`}
                  className="font-serif text-2xl md:text-3xl font-bold text-red-700 hover:text-red-800 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-6 h-6" aria-hidden="true" />
                  {d.tel}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-stone-500">
            ※ 上記は弊社が主にお取扱いしている保険会社のサポート窓口です。他社加入の場合は、保険証券の連絡先をご確認ください。
          </p>
        </div>
      </section>

      {/* 自動車トラブル / レッカー */}
      <section className="bg-[#FAF7F0] py-14 md:py-16" aria-labelledby="towing-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Car className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
            <h2
              id="towing-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D]"
            >
              レッカー・自動車トラブル時のロードサービス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {towingDesks.map((d) => (
              <div
                key={d.company}
                className="bg-white border border-stone-200 rounded-lg p-6 md:p-7"
              >
                <p className="text-xs font-semibold text-[#5C7A14] tracking-widest mb-1">
                  {d.company}
                </p>
                <p className="text-sm text-stone-600 mb-3">{d.label}</p>
                <a
                  href={`tel:${d.tel.replace(/-/g, "")}`}
                  className="font-serif text-2xl md:text-3xl font-bold text-[#5C7A14] hover:text-[#95C11F] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-6 h-6" aria-hidden="true" />
                  {d.tel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 事故対応の流れ */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="flow-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              ACCIDENT FLOW
            </p>
            <h2
              id="flow-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#3D3D3D] mb-4"
            >
              事故発生時の対応の流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <ol className="space-y-4">
            {accidentSteps.map((s) => (
              <li
                key={s.step}
                className="bg-[#FAF7F0] border border-stone-200 rounded-lg p-6 flex gap-5"
              >
                <span className="font-serif text-3xl md:text-4xl font-bold text-[#95C11F] leading-none shrink-0">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 夜間・休日 */}
      <section className="bg-[#3D4A5A] text-white py-14 md:py-16" aria-labelledby="night-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-[#A8C8E8]" aria-hidden="true" />
            <h2
              id="night-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-white"
            >
              夜間・休日のお問い合わせ
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-7 md:p-8">
            <ul className="space-y-3 text-stone-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#95C11F] mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-white">事故・自動車トラブル</strong>
                  は、上記の各保険会社の24時間サポートデスクへご連絡ください。
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#95C11F] mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  <strong className="text-white">その他のお問い合わせ</strong>
                  は、メール（yume@yumehoken.jp）またはお問い合わせフォームをご利用ください。営業時間内に順次ご対応します。
                </span>
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-7 py-3.5 rounded-md font-bold text-sm transition-all shadow-md hover:shadow-lg"
            >
              お問い合わせフォームへ
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
