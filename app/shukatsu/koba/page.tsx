import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Sprout,
  Cat,
  Heart,
  Quote,
  CheckCircle2,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "担当・木庭 理恵｜終活ステーション",
  description:
    "終活ステーションの窓口担当・木庭 理恵（こば りえ）のプロフィールと想いをご紹介します。「まず誰に...」という最初の窓口として、皆さまに寄り添います。",
  openGraph: {
    title: "担当・木庭 理恵｜終活ステーション",
    description: "「まず誰に...」という方の最初の窓口として、寄り添います。",
  },
}

const myStrengths = [
  {
    icon: Heart,
    title: "「聴く」を大切に",
    description:
      "答えを急がず、まずはお話をじっくり伺います。お一人おひとりの「これまで」と「これから」に丁寧に向き合います。",
  },
  {
    icon: Users,
    title: "信頼できる専門家ネットワーク",
    description:
      "司法書士・税理士・弁護士・葬儀社・介護事業者など、長年お付き合いのある信頼できる方々をお繋ぎします。",
  },
  {
    icon: Sprout,
    title: "「夢応援」の姿勢",
    description:
      "終活は「終わり」ではなく、これからをどう生きるかの選択。皆さまの夢を応援する伴走者でありたいと考えています。",
  },
]

const policy = [
  "ご相談内容は厳守します",
  "答えを押し付けず、ご本人・ご家族の意思を尊重します",
  "中立的な立場で、複数の選択肢をご提示します",
  "「まず誰に...」というご相談から大歓迎です",
]

export default function KobaPage() {
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
          <li className="text-stone-800 truncate">担当・木庭 理恵</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-14 md:py-20"
        aria-label="木庭 理恵 メインビジュアル"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.3em] mb-4">
              YOUR PARTNER
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-3 leading-tight">
              木庭 理恵
            </h1>
            <p className="font-serif text-base md:text-lg text-[#8B5A2B]">
              こば りえ／終活ステーション 担当
            </p>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto mt-5" aria-hidden="true" />
          </div>

          {/* プロフィール画像と名刺風カード */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
            <div className="bg-gradient-to-br from-[#FAF3E2] to-[#F4F8E8] p-10 flex flex-col items-center justify-center">
              <div
                className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border-4 border-[#E8B85F] flex items-center justify-center shadow-md mb-4"
                aria-hidden="true"
              >
                <Sprout className="w-20 h-20 text-[#5C7A14]" />
              </div>
              <p className="font-serif text-2xl font-bold text-[#3D3D3D]">木庭 理恵</p>
              <p className="text-sm text-stone-600 mt-1">こば りえ</p>
              <p className="text-xs text-stone-500 mt-3 italic text-center">
                ※プロフィール写真は<br />後日差し替え予定
              </p>
            </div>
            <div className="md:col-span-2 p-7 md:p-10">
              <dl className="space-y-3 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">所属</dt>
                  <dd className="text-stone-700">
                    ドリームインシュアランス株式会社（ゆめほけん）
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-t border-stone-100 pt-3">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">担当</dt>
                  <dd className="text-stone-700">終活ステーション 窓口</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-t border-stone-100 pt-3">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">主なご相談</dt>
                  <dd className="text-stone-700">
                    相続／お墓・葬儀／介護／遺品整理／エンディングノート／保険全般
                  </dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-t border-stone-100 pt-3">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">趣味</dt>
                  <dd className="text-stone-700 flex items-center gap-2">
                    <Cat className="w-4 h-4 text-[#92400E]" aria-hidden="true" />
                    ヨガ／お料理／猫
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* メッセージ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="message-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              MESSAGE
            </p>
            <h2
              id="message-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              ご挨拶
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto" aria-hidden="true" />
          </div>

          <div className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-7 md:p-10 relative">
            <Quote
              className="absolute top-6 right-6 w-12 h-12 text-[#E8B85F] opacity-30"
              aria-hidden="true"
            />
            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              はじめまして、終活ステーション担当の木庭理恵です。
            </p>
            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              「終活」と聞くと、なんだか少し重たい話のように感じる方もいらっしゃるかもしれません。
              でも私は、終活は<strong className="text-[#92400E]">「これからの人生をもっと自分らしく生きるための準備」</strong>
              だと考えています。
            </p>
            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              相続のこと、お墓のこと、保険のこと、介護のこと——
              ひとつひとつのお悩みは、調べてみると専門用語が飛び交い、
              「結局、誰に何を聞けばいいの？」と途方に暮れてしまう方も少なくありません。
            </p>
            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              私たち終活ステーションは、皆さまにとって
              <strong className="text-[#5C7A14]">「最初の窓口」</strong>
              でありたいと願っています。お話をじっくり伺い、必要に応じて信頼できる専門家へとお繋ぎし、
              手続きが終わるまで伴走させていただきます。
            </p>
            <p className="text-stone-700 leading-relaxed text-base md:text-lg">
              「ちょっと聞いてみたい」というレベルで、まったく構いません。
              お茶でも飲みながら、ぜひお話に来てください。
            </p>
            <p className="mt-8 text-sm text-[#92400E] font-bold text-right">
              — 終活ステーション 担当 / 木庭 理恵
            </p>
          </div>
        </div>
      </section>

      {/* 私が大切にしていること */}
      <section className="bg-[#F4F8E8] py-16 md:py-24" aria-labelledby="strengths-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              MY APPROACH
            </p>
            <h2
              id="strengths-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              私が大切にしていること
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {myStrengths.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-stone-200 rounded-2xl p-7"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4F8E8] mb-4">
                  <s.icon className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ご相談時のお約束 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="policy-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              MY PROMISE
            </p>
            <h2
              id="policy-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              ご相談時のお約束
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto" aria-hidden="true" />
          </div>

          <ul className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-7 md:p-10 space-y-4">
            {policy.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-stone-700 leading-relaxed">
                <CheckCircle2
                  className="w-5 h-5 text-[#95C11F] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
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
            木庭にご相談ください
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。「ちょっと話を聞いてみたい」だけでも、お気軽にどうぞ。
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
