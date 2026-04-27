import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Briefcase,
  Sprout,
  Heart,
  Users,
  Quote,
} from "lucide-react"

export const metadata: Metadata = {
  title: "代表メッセージ｜会社概要｜ゆめほけん",
  description:
    "ドリームインシュアランス株式会社 代表取締役 森 幹人より、皆さまへのご挨拶です。「安心と夢をつないで笑顔をまもる」を理念に、地域に根ざした一生涯のパートナーを目指して。",
  openGraph: {
    title: "代表メッセージ｜ゆめほけん",
    description: "「ゆめのモリモリ」、森幹人より。",
  },
}

const values = [
  {
    icon: Heart,
    title: "お客様の人生に寄り添う",
    description:
      "保険は「商品を売る」のではなく、「人生に寄り添う」もの。お一人おひとりに必要な保障を、誠実にご提案します。",
  },
  {
    icon: Users,
    title: "プロフェッショナルをつなぐ",
    description:
      "保険会社・士業・各分野の専門家との信頼関係をハブとして、お客様の「困った」を最短で解決へ。",
  },
  {
    icon: Sprout,
    title: "地域とともに成長する",
    description:
      "北九州を拠点に、地域のお客様の「ゆめ」を応援。CSR活動を通じて、社会全体への恩返しも続けます。",
  },
]

export default function AboutMessagePage() {
  return (
    <>
      {/* パンくず */}
      <nav
        aria-label="パンくずリスト"
        className="bg-[#FAF7F0] border-b border-stone-200"
      >
        <ol className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-stone-600">
          <li>
            <Link href="/" className="hover:text-[#5C7A14]">
              ホーム
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li>
            <Link href="/about" className="hover:text-[#5C7A14]">
              会社概要
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-stone-400" aria-hidden="true" />
          <li className="text-stone-800 truncate">代表メッセージ</li>
        </ol>
      </nav>

      {/* ヒーロー */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#F4F8E8] via-white to-[#FAF7F0] py-14 md:py-20"
        aria-label="代表メッセージ メインビジュアル"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.3em] mb-4">
              MESSAGE FROM CEO
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-4 leading-tight">
              代表メッセージ
            </h1>
            <div className="w-16 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          {/* 名刺風カード */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-3">
            <div className="bg-gradient-to-br from-[#F4F8E8] to-[#FAF3E2] p-10 flex flex-col items-center justify-center">
              <div
                className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border-4 border-[#95C11F] flex items-center justify-center shadow-md mb-4"
                aria-hidden="true"
              >
                <Briefcase className="w-20 h-20 text-[#5C7A14]" />
              </div>
              <p className="font-serif text-2xl font-bold text-[#3D3D3D]">森 幹人</p>
              <p className="text-sm text-stone-600 mt-1">Mikito Mori</p>
              <p className="text-xs text-[#5C7A14] font-semibold mt-3 tracking-widest">
                代表取締役
              </p>
              <p className="text-xs text-stone-500 mt-3 italic text-center">
                ※プロフィール写真は<br />後日差し替え予定
              </p>
            </div>
            <div className="md:col-span-2 p-7 md:p-10">
              <dl className="space-y-3 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">役職</dt>
                  <dd className="text-stone-700">代表取締役</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-t border-stone-100 pt-3">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">キャッチ</dt>
                  <dd className="text-stone-700">「ゆめのモリモリ」</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-t border-stone-100 pt-3">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">創業</dt>
                  <dd className="text-stone-700">2013年2月</dd>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border-t border-stone-100 pt-3">
                  <dt className="font-semibold text-[#5C7A14] sm:w-32 shrink-0">想い</dt>
                  <dd className="text-stone-700">
                    「安心と夢をつないで笑顔をまもる」を経営理念に、地域の1万人の夢応援を目指す。
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 本文メッセージ */}
      <section className="bg-white py-16 md:py-24" aria-labelledby="message-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="message-heading" className="sr-only">
            代表メッセージ本文
          </h2>

          <div className="bg-[#FAF7F0] border border-stone-200 rounded-2xl p-7 md:p-10 relative">
            <Quote
              className="absolute top-6 right-6 w-12 h-12 text-[#95C11F] opacity-30"
              aria-hidden="true"
            />

            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              ゆめほけん（ドリームインシュアランス株式会社）の代表を務める、森 幹人と申します。
              数あるサイトの中から、当社のページをご覧いただきありがとうございます。
            </p>

            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              当社は2013年に創業し、北九州・小倉南区のログハウスを拠点として、
              損害保険・生命保険を中心に、終活ステーションや法人向けのリスクヘッジ・経営コンサルティングまで、
              地域の皆さまの「ゆめ」を応援する保険代理店として歩んでまいりました。
            </p>

            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              私たちが大切にしているのは、
              <strong className="text-[#5C7A14]">「保険を売ること」よりも、お客様の人生に寄り添うこと</strong>。
              ライフステージや家族構成、経営環境が変わるたびに、必要な保障も変わります。
              一度ご縁をいただいたお客様とは、一生涯のパートナーとしてお付き合いさせていただきたいと考えています。
            </p>

            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              また、保険だけで解決できないご相談には、
              <strong className="text-[#8B5A2B]">司法書士・税理士・弁護士・葬儀社・介護事業者など、信頼できる専門家</strong>
              をお繋ぎします。お客様にとって「最初に思い出す窓口」でありたい——
              これが、私たちの目指す姿です。
            </p>

            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-5">
              ビジョンは
              <strong className="text-[#5C7A14]">「目指せ！1万人の夢応援」</strong>。
              小さな保険代理店ですが、お一人おひとりとの真剣な対話を積み重ねていくことで、
              地域の中で1万人の方々の「ゆめ」を応援する存在になりたいと願っています。
            </p>

            <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
              「ちょっと話を聞いてみたい」というレベルで、まったく構いません。
              木のぬくもりに包まれたログハウスで、お茶でも飲みながらお話しましょう。
              皆さまとお目にかかれる日を、社員一同心よりお待ちしています。
            </p>

            <div className="border-t border-stone-200 pt-6 text-right">
              <p className="text-sm text-stone-500 mb-1">ドリームインシュアランス株式会社</p>
              <p className="font-serif text-xl font-bold text-[#3D3D3D]">
                代表取締役 森 幹人
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 大切にしている3つの価値 */}
      <section className="bg-[#F4F8E8] py-16 md:py-24" aria-labelledby="values-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[#5C7A14] text-sm font-semibold tracking-[0.25em] mb-3">
              OUR VALUES
            </p>
            <h2
              id="values-heading"
              className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-3"
            >
              大切にしている3つの価値
            </h2>
            <div className="w-12 h-0.5 bg-[#95C11F] mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-stone-200 rounded-2xl p-7"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F4F8E8] mb-4">
                  <v.icon className="w-6 h-6 text-[#5C7A14]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-[#3D3D3D] mb-3 leading-tight">
                  {v.title}
                </h3>
                <p className="text-sm text-stone-700 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="bg-white py-12 md:py-16" aria-label="関連ページ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { href: "/about/members", label: "メンバー紹介", desc: "ゆめほけんを支える6名のスタッフ" },
              { href: "/recruit", label: "採用情報", desc: "一緒に「ゆめ」を応援する仲間を募集中" },
              { href: "/csr", label: "CSR活動", desc: "5パートナーへの支援を通じて社会貢献" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group bg-[#FAF7F0] border border-stone-200 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all"
              >
                <p className="font-serif text-lg font-bold text-[#3D3D3D] mb-2 group-hover:text-[#5C7A14] transition-colors">
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
      <section className="bg-[#FAF7F0] py-14 md:py-20" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="font-serif text-2xl md:text-3xl font-bold text-[#3D3D3D] mb-4"
          >
            ゆめほけんに、お話を聞かせてください
          </h2>
          <p className="text-stone-700 leading-relaxed mb-8 text-base md:text-lg">
            ご相談は無料です。一生涯のパートナーとして、お客様に寄り添います。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-2xl mx-auto">
            <Link
              href="/contact"
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
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-[#5C7A14] hover:text-[#95C11F] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              会社概要TOPへ戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
