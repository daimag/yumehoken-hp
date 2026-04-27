import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Quote,
  Heart,
  Flower2,
  Sprout,
  Building,
  PackageOpen,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "お客様の声｜終活ステーション",
  description:
    "終活ステーションにご相談いただいた皆さまの声をご紹介します。遺品整理・相続登記・お墓・介護など、実際のご相談事例とその後をお伝えします。",
  openGraph: {
    title: "お客様の声｜終活ステーション",
    description: "ご相談いただいた皆さまの、安心した日々を取り戻すまで。",
  },
}

const voices = [
  {
    icon: PackageOpen,
    age: "40代女性",
    location: "北九州市小倉南区在住",
    topic: "遺品整理・供養",
    body:
      "引っ越しをきっかけに、夫の実家の位牌を整理したいと思っていましたが、どこにお願いすればよいのか分からず困っていました。きちんと供養までしてくれる業者を探すのも難しく、悩んでいました。そんな時に知人から終活ステーションを紹介してもらい、相談してみることにしました。おかげでしっかり供養までできて、心からホッとしています。頼んで、本当に良かったです。",
  },
  {
    icon: FileText,
    age: "40代男性",
    location: "北九州市戸畑区在住",
    topic: "相続登記・名義変更",
    body:
      "父が亡くなって実家の名義をそのままにしていましたが、今は3年以内に名義を変えなければならない法律があることを知りませんでした。終活ステーションに相談してそのことを知り、現在は司法書士の先生にお願いして名義変更の手続きを進めています。親身に対応してくださる方を紹介していただき、安心して手続きを進められています。",
    note: "※2024年4月より、相続で不動産を取得した場合、3年以内に名義変更（相続登記）をすることが義務化されました。",
  },
  {
    icon: Flower2,
    age: "70代女性",
    location: "北九州市小倉北区在住",
    topic: "お墓・葬儀の事前相談",
    body:
      "主人が他界してから、自分のお墓のことを考えるようになりました。子供たちに迷惑をかけたくないという思いで、樹木葬や納骨堂など色々な選択肢を一緒に検討してくれて、最終的に納得できる場所を決めることができました。「家族会議で話せるように」と資料も整えてくださり、感謝しています。",
  },
  {
    icon: Heart,
    age: "60代男性",
    location: "北九州市八幡西区在住",
    topic: "介護・施設選び",
    body:
      "母の介護が在宅では難しくなり、施設をどう選んだらよいか途方に暮れていました。複数のケアマネージャーをご紹介いただき、見学にも同行してくださって、母にも家族にも合う施設を見つけられました。「保険代理店なのにここまでしてくれるんだ」と驚きました。",
  },
  {
    icon: Building,
    age: "50代女性",
    location: "福岡県中間市在住",
    topic: "実家の処分・相続",
    body:
      "両親が高齢になり、誰も住まなくなる実家をどうするか兄妹で悩んでいました。終活ステーションに相談したところ、税理士・不動産業者の方を含めて何度もミーティングをしてくださり、家族みんなが納得できる形で売却の方針を決めることができました。",
  },
  {
    icon: Sprout,
    age: "70代女性",
    location: "北九州市小倉南区在住",
    topic: "エンディングノート作成",
    body:
      "「自分が元気なうちに、子供に伝えておくべきことを整理しておきたい」と思い、エンディングノートの相談に伺いました。一緒に項目を埋めていくお手伝いをしてくださり、書き終わった時には、これまでの人生を振り返る良いきっかけになりました。",
  },
]

const counts = [
  { value: "1万人", label: "目指せ！1万人の夢応援" },
  { value: "10社", label: "提携保険会社（損保3社・生保7社）" },
  { value: "139件", label: "2024年 顧客の声" },
  { value: "81件", label: "2024年 つなぐ活動実績" },
]

export default function ShukatsuVoicesPage() {
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
          <li className="text-stone-800 truncate">お客様の声</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-16 md:py-24"
        aria-label="お客様の声 メインビジュアル"
      >
        <div className="absolute top-10 left-10 opacity-15" aria-hidden="true">
          <Quote className="w-32 h-32 text-[#E8B85F]" strokeWidth={1} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400E] text-sm font-semibold tracking-[0.3em] mb-4">
            CUSTOMER VOICES
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-5 leading-tight">
            お客様の声
          </h1>
          <div className="w-16 h-0.5 bg-[#E8B85F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            終活ステーションにご相談いただいた皆さまから、たくさんの「ありがとう」をいただいています。
            <br className="hidden md:block" />
            一部をご紹介します。
          </p>
        </div>
      </section>

      {/* 数値ハイライト */}
      <section className="bg-white py-12 border-b border-stone-100" aria-label="主な実績">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {counts.map((c) => (
              <div
                key={c.label}
                className="text-center bg-[#FBF8F0] border border-[#F4E4C1] rounded-xl p-5"
              >
                <p className="font-serif text-2xl md:text-3xl font-bold text-[#92400E] mb-1">
                  {c.value}
                </p>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声一覧 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="voices-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="voices-heading" className="sr-only">
            お客様の声一覧
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {voices.map((v, idx) => (
              <article
                key={idx}
                className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-6 md:p-8 relative flex flex-col"
              >
                <Quote
                  className="absolute top-5 right-5 w-10 h-10 text-[#E8B85F] opacity-40"
                  aria-hidden="true"
                />
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#F4E4C1]">
                    <v.icon className="w-6 h-6 text-[#92400E]" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-serif font-bold text-[#3D3D3D] text-base">{v.age}</p>
                    <p className="text-xs text-stone-500">{v.location}</p>
                  </div>
                </div>
                <span className="inline-block self-start text-xs font-semibold text-[#5C7A14] bg-[#F4F8E8] border border-[#D6E5A0] px-3 py-1 rounded-full mb-4">
                  {v.topic}
                </span>
                <p className="text-stone-700 leading-relaxed text-sm md:text-base flex-grow">
                  「{v.body}」
                </p>
                {v.note && (
                  <p className="mt-4 text-xs text-stone-500 leading-relaxed border-t border-[#F4E4C1] pt-3">
                    {v.note}
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-10">
            ※ お客様の声は実際にいただいたご感想を一部編集して掲載しています。
          </p>
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
            あなたの「もしも」も、ご相談ください
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。お一人で抱え込まず、まずはお話を聞かせてください。
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
