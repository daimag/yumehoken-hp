import type { Metadata } from "next"
import PolicyLayout from "@/components/policy-layout"

export const metadata: Metadata = {
  title: "お客さま本位の業務運営方針 2024【実績】",
  description:
    "ドリームインシュアランス株式会社（ゆめほけん）が2024年度に掲げた「お客さま本位の業務運営方針」4方針の達成状況をKPIとともに公表します。",
}

export default function Fd2024ResultsPage() {
  return (
    <PolicyLayout
      englishLabel="FD DECLARATION 2024 — RESULTS"
      title="お客さま本位の業務運営方針 2024【実績】"
      lead="弊社が2024年度に掲げた「お客さま本位の業務運営方針」4方針の達成状況をKPIとともに公表いたします。"
      publishedAt="2025年公開"
    >
      <h2>方針1：やさしい保険代理店</h2>
      <p>
        分かりやすい言葉で丁寧かつ親切な説明を心がける取り組みを実施しました。
      </p>
      <table>
        <thead>
          <tr>
            <th>成果指標（KPI）</th>
            <th>目標</th>
            <th>実績</th>
            <th>判定</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>早期更改率</td>
            <td>85%以上</td>
            <td>52.3%</td>
            <td>未達</td>
          </tr>
          <tr>
            <td>多種目販売率</td>
            <td>15%以上</td>
            <td>13.9%</td>
            <td>未達</td>
          </tr>
        </tbody>
      </table>

      <h2>方針2：気配りのできる保険代理店</h2>
      <p>
        お客さまの声を積極的に収集し、業務改善に活かしました。
      </p>
      <table>
        <thead>
          <tr>
            <th>成果指標（KPI）</th>
            <th>目標</th>
            <th>実績</th>
            <th>判定</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>お客さまの声の報告・共有</td>
            <td>毎月5件（年60件）以上</td>
            <td>139件/年</td>
            <td><strong>達成</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>方針3：かしこい保険代理店</h2>
      <p>
        プロフェッショナルとしての資質向上のため、品質向上研修を継続実施しました。
      </p>
      <table>
        <thead>
          <tr>
            <th>成果指標（KPI）</th>
            <th>目標</th>
            <th>実績</th>
            <th>判定</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>品質向上3研修の毎月開催</td>
            <td>年36回（100%）</td>
            <td>36回/100%</td>
            <td><strong>達成</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>方針4：頼れる保険代理店</h2>
      <p>
        専門家ネットワークを活用した「つなぐ活動」で、お客さまの様々なお悩みに対応しました。
      </p>
      <table>
        <thead>
          <tr>
            <th>成果指標（KPI）</th>
            <th>目標</th>
            <th>実績</th>
            <th>判定</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>つなぐ活動実績件数</td>
            <td>月5件（年60件）以上</td>
            <td>81件/年</td>
            <td><strong>達成</strong></td>
          </tr>
        </tbody>
      </table>

      <h2>総評</h2>
      <p>
        2024年度は、4方針のうち <strong>3方針で目標を達成</strong> しました。一方、「やさしい保険代理店」のKPIは未達となりました。
      </p>
      <p>
        2025年度は、未達となったKPIへの対策を強化するとともに、「頼れる代理店」「気配りのできる代理店」「風通しの良い代理店」「やさしい代理店」「かしこい代理店」の <strong>5方針体制</strong> へと拡充し、より一層お客さま本位の業務運営に取り組んでまいります。
      </p>

      <p className="note">
        ※ 2025年度の方針は <a href="/policies/fd-2025" className="text-[#5C7A14] underline hover:text-[#95C11F]">お客さま本位の業務運営方針 2025</a> をご覧ください。
      </p>
    </PolicyLayout>
  )
}
