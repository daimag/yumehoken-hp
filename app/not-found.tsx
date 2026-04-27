import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Home, Mail, Briefcase, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <Section
      padding="lg"
      background="light"
      containerSize="md"
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="text-center">
        {/* アイコンと404エラー */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 mb-6">
            <AlertCircle className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            ページが見つかりません
          </h2>
        </div>

        {/* 説明文 */}
        <div className="max-w-md mx-auto mb-8">
          <p className="text-gray-600 mb-4">
            申し訳ございません。お探しのページは移動または削除された可能性があります。
          </p>
          <p className="text-gray-600">
            URLをご確認いただくか、以下のリンクからお探しの情報をご覧ください。
          </p>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild size="lg" className="min-w-[200px]">
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              ホームへ戻る
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="min-w-[200px] border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            <Link href="/services" className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              サービス一覧
            </Link>
          </Button>
        </div>

        {/* お問い合わせリンク */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">お困りの場合は</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium hover:underline"
          >
            <Mail className="mr-2 h-4 w-4" />
            お問い合わせフォーム
          </Link>
          <span className="text-gray-600 ml-1">よりご連絡ください</span>
        </div>

        {/* 便利なリンク */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">よくアクセスされるページ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-blue-600 hover:underline transition-colors"
            >
              会社概要
            </Link>
            <Link 
              href="/insight-dx" 
              className="text-gray-600 hover:text-blue-600 hover:underline transition-colors"
            >
              INSIGHT DX
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-600 hover:text-blue-600 hover:underline transition-colors"
            >
              導入事例
            </Link>
            <Link 
              href="/refractory" 
              className="text-gray-600 hover:text-blue-600 hover:underline transition-colors"
            >
              耐火物事業
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}