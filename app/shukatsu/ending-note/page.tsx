import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  BookOpen,
  PenLine,
  Heart,
  FileText,
  Users,
  Lightbulb,
  CheckCircle2,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "エンディングノート作成サポート｜終活ステーション",
  description:
    "「誰に何を遺したいか」を一緒に整理する、エンディングノート作成のお手伝い。書き始めのきっかけから完成まで、終活ステーションが伴走します。",
  openGraph: {
    title: "エンディングノート作成サポート｜終活ステーション",
    description: "想いを言葉に。これまでとこれからを、一緒に整理しましょう。",
  },
}

const benefits = [
  {
    icon: Heart,
    title: "ご家族への思いやり",
    description:
      "もしものとき、ご家族が迷わずに済むように。預金口座・保険・年金などの所在を伝えておくことが、何よりの「思いやり」になります。",
  },
  {
    icon: Lightbulb,
    title: "自分自身の振り返り",
    description:
      "これまでの人生を整理することで、これから何を大切にしたいかが見えてきます。書くこと自体が「これから」のための時間です。",
  },
  {
    icon: Users,
    title: "話し合いのきっかけに",
    description:
      "ノートを「家族会議のたたき台」として使うことで、普段は話しづらい相続・お墓・医療の話題を、自然に共有できます。",
  },
]

const sections = [
  {
    no: "01",
    title: "自分のこと",
    items: [
      "氏名・本籍・生年月日",
      "家系図・親族関係",
      "これまでの経歴・思い出",
      "大切にしていること",
    ],
  },
  {
    no: "02",
    title: "資産のこと",
    items: [
      "預貯金・有価証券",
      "不動産（自宅・実家）",
      "加入している保険",
      "年金・各種手当",
    ],
  },
  {
    no: "03",
    title: "医療・介護のこと",
    items: [
      "かかりつけ医・既往症",
      "延命治療への希望",
      "介護してほしい場所",
      "認知症になった場合の希望",
    ],
  },
  {
    no: "04",
    title: "葬儀・お墓のこと",
    items: [
      "葬儀の形式（家族葬／一般葬／直葬）",
      "宗教・宗派",
      "お墓・納骨堂の希望",
      "遺影に使ってほしい写真",
    ],
  },
  {
    no: "05",
    title: "相続のこと",
    items: [
      "相続人・関係者",
      "遺言書の有無・所在",
      "形見分けの希望",
      "デジタル資産（SNS・アカウント）",
    ],
  },
  {
    no: "06",
    title: "ご家族へのメッセージ",
    items: [
      "感謝の言葉",
      "伝えておきたいエピソード",
      "残された人への願い",
      "ペットのこと",
    ],
  },
]

const flow = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "お電話・LINE・フォームよりお気軽にご連絡ください。",
  },
  {
    step: "02",
    title: "初回ヒアリング",
    description:
      "ログハウスにて、ご自身のこれまで・これからを、ゆっくりお話しいただきます。",
  },
  {
    step: "03",
    title: "項目の整理",
    description:
      "全体構成をご一緒に確認し、書きやすい順番でひとつずつ埋めていきます。",
  },
  {
    step: "04",
    title: "見直し・更新",
    description:
      "完成後も、ライフイベントに合わせて定期的に見直すお手伝いをします。",
  },
]

export default function EndingNotePage() {
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
          <li className="text-stone-800 truncate">エンディングノート</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#FAF3E2] via-[#FBF6E9] to-[#F4F8E8] py-16 md:py-24"
        aria-label="エンディングノート メインビジュアル"
      >
        <div className="absolute top-10 right-10 opacity-15" aria-hidden="true">
          <BookOpen className="w-32 h-32 text-[#E8B85F]" strokeWidth={1} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-15" aria-hidden="true">
          <PenLine className="w-24 h-24 text-[#95C11F]" strokeWidth={1} />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#92400E] text-sm font-semibold tracking-[0.3em] mb-4">
            ENDING NOTE
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-5 leading-tight">
            エンディングノート<br className="md:hidden" />作成サポート
          </h1>
          <p className="font-serif text-lg md:text-xl text-[#8B5A2B] mb-6">
            想いを言葉に。これまでとこれからを、一緒に整理しましょう。
          </p>
          <div className="w-16 h-0.5 bg-[#E8B85F] mx-auto mb-6" aria-hidden="true" />
          <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            「何から書けばいいかわからない」「途中で手が止まってしまう」——
            <br className="hidden md:block" />
            そんな声をたくさん伺います。終活ステーションが、書き始めから完成まで伴走します。
          </p>
        </div>
      </section>

      {/* なぜ書く？ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              WHY WRITE
            </p>
            <h2
              id="why-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              なぜエンディングノートを書くの？
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-7"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#F4E4C1] mb-4">
                  <b.icon className="w-6 h-6 text-[#92400E]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                  {b.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 書く項目 */}
      <section className="bg-[#F4F8E8] py-16 md:py-24" aria-labelledby="sections-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              SECTIONS
            </p>
            <h2
              id="sections-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              書く項目（6つの章）
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto mb-5" aria-hidden="true" />
            <p className="text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              一気に書く必要はありません。書きやすい章から、少しずつ進めていきましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((s) => (
              <div
                key={s.no}
                className="bg-white border border-stone-200 rounded-2xl p-6 md:p-7"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-serif text-3xl font-bold text-[#E8B85F]">
                    {s.no}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D]">
                    {s.title}
                  </h3>
                </div>
                <ul className="space-y-2 border-t border-stone-100 pt-4">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-stone-700"
                    >
                      <FileText
                        className="w-4 h-4 text-[#95C11F] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サポート内容 */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="support-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
                OUR SUPPORT
              </p>
              <h2
                id="support-heading"
                className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4 leading-tight"
              >
                ゆめほけんのサポート内容
              </h2>
              <div className="w-12 h-0.5 bg-[#E8B85F] mb-6" aria-hidden="true" />
              <p className="text-stone-700 leading-relaxed mb-5 text-base md:text-lg">
                市販のエンディングノートを使ってもいいですし、終活ステーションでフォーマットをご用意することもできます。
                大切なのは「書く」ことよりも「整理して伝える」こと。
                書きやすい順番でじっくり進めましょう。
              </p>
              <ul className="space-y-3">
                {[
                  "書き始めのきっかけづくり",
                  "項目ごとのヒアリングと記入サポート",
                  "保険・年金の加入状況の整理",
                  "ご家族への伝え方のアドバイス",
                  "完成後の保管・更新方法のご提案",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-stone-700 leading-relaxed"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#95C11F] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FBF8F0] border border-[#F4E4C1] rounded-2xl p-7 md:p-9">
              <Calendar className="w-8 h-8 text-[#92400E] mb-4" aria-hidden="true" />
              <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-3">
                所要時間の目安
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-stone-700">
                <li className="flex items-baseline gap-3">
                  <span className="text-[#92400E] font-bold w-20 shrink-0">初回</span>
                  <span>1〜2時間（ヒアリング・全体像の整理）</span>
                </li>
                <li className="flex items-baseline gap-3 border-t border-[#F4E4C1] pt-3">
                  <span className="text-[#92400E] font-bold w-20 shrink-0">2〜3回目</span>
                  <span>各1時間程度（章ごとに具体的に書き進める）</span>
                </li>
                <li className="flex items-baseline gap-3 border-t border-[#F4E4C1] pt-3">
                  <span className="text-[#92400E] font-bold w-20 shrink-0">完成後</span>
                  <span>年1回程度の見直し（無料）</span>
                </li>
              </ul>
              <p className="mt-5 text-xs text-stone-600 leading-relaxed border-t border-[#F4E4C1] pt-4">
                ※ ペースはお客様に合わせて調整します。一気に書ききる必要はありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="bg-[#FAF7F0] py-16 md:py-24" aria-labelledby="flow-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#92400E] text-sm font-semibold tracking-[0.25em] mb-3">
              HOW IT WORKS
            </p>
            <h2
              id="flow-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              ご相談の流れ
            </h2>
            <div className="w-12 h-0.5 bg-[#E8B85F] mx-auto" aria-hidden="true" />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flow.map((f, idx) => (
              <li
                key={f.step}
                className="relative bg-white border border-[#F4E4C1] rounded-2xl p-6"
              >
                <div className="absolute -top-4 left-6 inline-flex items-center justify-center w-12 h-12 bg-[#E8B85F] text-white font-serif text-lg font-bold rounded-full shadow-md">
                  {f.step}
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg font-bold text-[#3D3D3D] mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{f.description}</p>
                </div>
                {idx < flow.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-[#E8B85F]"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
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
            「書いてみたい」が、第一歩
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。まずは、書き始めのきっかけをご一緒に見つけましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
            <Link
              href="/contact?type=shukatsu&service=ending-note"
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
