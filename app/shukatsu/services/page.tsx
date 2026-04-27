import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Users,
  Building,
  Heart,
  Flower2,
  PiggyBank,
  Sprout,
  BookOpen,
  CheckCircle2,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "お手伝いできる7つのサービス｜終活ステーション",
  description:
    "終活ステーションがご提供する7つのサービス（士業のご紹介／不動産／介護／お墓・葬儀・仏具／相続税対策／生前・遺品整理／エンディングノート）を詳しくご紹介します。",
  openGraph: {
    title: "お手伝いできる7つのサービス｜終活ステーション",
    description: "「もしも」と「これから」を支える、終活のワンストップサービス。",
  },
}

const services = [
  {
    icon: Users,
    title: "士業のご紹介",
    summary: "司法書士・税理士・弁護士・行政書士など、信頼できる専門家をご紹介します。",
    points: [
      "相続登記や名義変更（司法書士）",
      "相続税の試算と申告サポート（税理士）",
      "遺言書作成・遺産分割協議の調整（弁護士・行政書士）",
      "ゆめほけん独自ネットワークから、案件ごとに最適な専門家を",
    ],
  },
  {
    icon: Building,
    title: "不動産のご相談",
    summary: "売却・賃貸・名義変更など、不動産にまつわるお悩みをワンストップで対応します。",
    points: [
      "実家・空き家の処分／売却支援",
      "賃貸活用や任意売却の検討",
      "相続登記の義務化（2024年4月施行）対応",
      "信頼できる不動産業者と連携",
    ],
  },
  {
    icon: Heart,
    title: "介護の備え",
    summary: "在宅介護・施設選び・介護費用など、介護が必要になったときの準備を一緒に整えます。",
    points: [
      "ご本人・ご家族の状況に合わせた施設選定",
      "介護保険・民間介護保険の見直し",
      "在宅介護を選んだ場合のリスク整理",
      "ケアマネージャー・介護事業者との連携",
    ],
  },
  {
    icon: Flower2,
    title: "お墓・葬儀・仏具のご相談",
    summary: "葬儀の事前相談から納骨、お墓の選び方、仏具のご用意まで丁寧にお手伝いします。",
    points: [
      "葬儀の事前相談（家族葬・一般葬・直葬）",
      "霊園・納骨堂・樹木葬など多様な選択肢",
      "仏壇・仏具・お位牌のご相談",
      "費用感の比較と見積もりサポート",
    ],
  },
  {
    icon: PiggyBank,
    title: "相続税対策・資産運用・老後資金",
    summary: "ライフプランに合わせた資産設計を、保険とFPの視点で一緒にご提案します。",
    points: [
      "ライフプラン表をもとにした老後資金シミュレーション",
      "生命保険を活用した相続税対策",
      "NISA・iDeCo時代の資産形成サポート",
      "税理士・FPと連携した一気通貫の設計",
    ],
  },
  {
    icon: Sprout,
    title: "生前・遺品整理のお手伝い",
    summary: "ご本人がお元気なうちから、ご家族のためにできる整理を支援します。",
    points: [
      "生前整理（写真・手紙・思い出の品の整理）",
      "遺品整理（信頼できる業者の選定・立ち会い）",
      "貴重品・重要書類の仕分けサポート",
      "供養まで丁寧にお願いできる体制",
    ],
  },
  {
    icon: BookOpen,
    title: "エンディングノート作成サポート",
    summary: "「誰に何を遺したいか」を一緒に整理する、書き方のお手伝いをします。",
    points: [
      "書き始めのきっかけづくりと項目の整理",
      "ご家族に伝えたいメッセージの言語化",
      "重要書類の所在・保険の加入状況のまとめ方",
      "定期的な見直しのアドバイス",
    ],
  },
]

export default function ShukatsuServicesPage() {
  return (
    <>
      {/* パンくず */}
      <nav
        aria-label="パンくずリスト"
        className="bg-[#FBF8F0] border-b border-[#F4E4C1]"
      >
        <ol className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-stone-600">
          <li>
            <Link href="/" className="hover:text-[#92400E]">
              ホーム
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li>
            <Link href="/shukatsu" className="hover:text-[#92400E]">
              終活ステーション
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">お手伝いできる7つのサービス</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-16 md:py-24"
        aria-label="サービス一覧 メインビジュアル"
      >
        <div className="absolute top-10 right-10 opacity-15" aria-hidden="true">
          <Briefcase className="w-32 h-32 text-[#E8B85F]" strokeWidth={1} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400E] text-sm font-semibold tracking-[0.3em] mb-4">
            WHAT WE CAN DO
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-5 leading-tight">
            お手伝いできる<br className="md:hidden" />7つのサービス
          </h1>
          <div className="w-16 h-0.5 bg-[#E8B85F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            終活ステーションは、人生後半戦のお悩みを<strong className="text-[#92400E]">7つの領域</strong>でサポートします。
            <br className="hidden md:block" />
            ひとつの窓口にご相談いただくだけで、必要な専門家へとお繋ぎします。
          </p>
        </div>
      </section>

      {/* サービス詳細 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="services-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="sr-only">
            サービス詳細
          </h2>
          <ol className="space-y-10 md:space-y-14">
            {services.map((s, idx) => (
              <li
                key={s.title}
                className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-7 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* 番号 + アイコン */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-32 shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-[#F4E4C1]">
                      <s.icon className="w-7 h-7 text-[#92400E]" aria-hidden="true" />
                    </div>
                    <span className="font-serif text-3xl md:text-4xl font-bold text-[#E8B85F]">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* 本文 */}
                  <div className="flex-grow">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                      {s.title}
                    </h3>
                    <p className="text-stone-700 leading-relaxed mb-5 text-base md:text-lg">
                      {s.summary}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-[#F4E4C1] pt-5">
                      {s.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 text-sm text-stone-700 leading-relaxed"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#95C11F] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="bg-[#F4F8E8] py-14 md:py-20" aria-labelledby="related-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="related-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-8 text-center"
          >
            あわせてご覧ください
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                href: "/shukatsu/voices",
                label: "お客様の声",
                desc: "ご相談いただいた方々のリアルな声をご紹介。",
              },
              {
                href: "/shukatsu/koba",
                label: "担当・木庭 理恵",
                desc: "終活ステーションの窓口担当者プロフィール。",
              },
              {
                href: "/shukatsu/ending-note",
                label: "エンディングノート",
                desc: "「想いを遺す」を一緒に整理する書き方ガイド。",
              },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-white border border-stone-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <p className="font-serif text-lg font-bold text-[#3D3D3D] mb-2 group-hover:text-[#92400E] transition-colors">
                  {l.label}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">{l.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm text-[#5C7A14] font-semibold">
                  詳しく見る
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-14 md:py-20"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4"
          >
            まずは、お気軽にご相談ください
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。複数のサービスを組み合わせてのご相談も可能です。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
            <Link
              href="/contact?type=shukatsu"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#95C11F] hover:bg-[#7DA519] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              お問い合わせフォーム
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0939650660"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-6 py-4 rounded-md font-bold transition-all"
            >
              <Phone className="w-4 h-4" />
              093-965-0660
            </a>
            <a
              href="https://line.me/R/ti/p/@942hvyou"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#06C755] hover:bg-[#05A847] text-white px-6 py-4 rounded-md font-bold transition-all shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              LINEで相談
            </a>
          </div>
          <div className="mt-10">
            <Link
              href="/shukatsu"
              className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#92400E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              終活ステーションTOPへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
