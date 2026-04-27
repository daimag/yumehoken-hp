import Link from "next/link"
import { Home, Mail, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#FAF7F0] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center">
          {/* アイコンと404 */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F4F8E8] mb-6">
              <AlertCircle className="w-12 h-12 text-[#5C7A14]" aria-hidden="true" />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-[#3D3D3D] mb-4">404</h1>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#3D3D3D] mb-4">
              ページが見つかりません
            </h2>
          </div>

          {/* 説明文 */}
          <div className="max-w-md mx-auto mb-10">
            <p className="text-stone-700 leading-relaxed mb-3">
              申し訳ございません。お探しのページは移動または削除された可能性があります。
            </p>
            <p className="text-stone-700 leading-relaxed">
              URLをご確認いただくか、以下のリンクからお探しの情報をご覧ください。
            </p>
          </div>

          {/* アクションボタン */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center min-w-[220px] bg-[#95C11F] hover:bg-[#7DA519] text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-sm hover:shadow-md"
            >
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              ホームへ戻る
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-w-[220px] border-2 border-[#95C11F] text-[#5C7A14] hover:bg-[#95C11F] hover:text-white px-8 py-3.5 rounded-md font-bold transition-all"
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              お問い合わせ
            </Link>
          </div>

          {/* よくアクセスされるページ */}
          <div className="pt-8 border-t border-stone-200">
            <h3 className="font-serif text-lg font-semibold text-[#3D3D3D] mb-5">よくアクセスされるページ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Link href="/personal" className="text-stone-700 hover:text-[#5C7A14] hover:underline transition-colors">
                一般のお客様へ
              </Link>
              <Link href="/shukatsu" className="text-stone-700 hover:text-[#5C7A14] hover:underline transition-colors">
                終活ステーション
              </Link>
              <Link href="/business" className="text-stone-700 hover:text-[#5C7A14] hover:underline transition-colors">
                法人のお客様へ
              </Link>
              <Link href="/recruit" className="text-stone-700 hover:text-[#5C7A14] hover:underline transition-colors">
                採用情報
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
