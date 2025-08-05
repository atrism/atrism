import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">Atrism</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">サービス</Link>
              <Link href="#challenges" className="text-slate-700 hover:text-blue-600 transition-colors">課題</Link>
              <Link href="#solutions" className="text-slate-700 hover:text-blue-600 transition-colors">ソリューション</Link>
              <Link href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">会社概要</Link>
              <Link href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">お問い合わせ</Link>
            </div>
            <div className="md:hidden">
              <button className="text-slate-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Gartner提唱フレームワーク
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              AI TRiSMで
              <span className="text-blue-600">企業の未来</span>
              を守る
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
              AIの信頼性、リスク管理、セキュリティ、ガバナンスを包括的にサポートし、
              企業のAI戦略を成功に導くコンサルティングサービス
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link 
                href="#services"
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                サービス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI TRiSM Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI TRiSMとは？
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              AI TRiSM（エーアイトリズム）は、Gartner社が提唱するAIの信頼性と安全性を確保するための包括的フレームワークです
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                AIと共存する未来のために必要な4つの要素
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                AI TRiSMは「Trust（信頼性）」「Risk（リスク）」「Security Management（セキュリティ・マネジメント）」の頭文字を取った造語で、
                2026年までに約8割の企業がAIを使用すると予測される中、安全にAIを活用するための重要な枠組みです。
              </p>
              <p className="text-lg text-slate-600 mb-8">
                既に約4割の企業がAI利用によるインシデントを経験しており、AI TRiSMの重要性が急速に高まっています。
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">重要な統計</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">80%</div>
                    <div className="text-sm text-blue-800">2026年までにAIを使用する企業</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">40%</div>
                    <div className="text-sm text-red-800">既にAIインシデントを経験</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-slate-900 mb-6">AI TRiSMの4つの構成要素</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">説明可能性（Explainability）</h5>
                    <p className="text-slate-600 text-sm">AIがどのように結論を導き出したかを明確に理解できること</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">ModelOps（モデル運用）</h5>
                    <p className="text-slate-600 text-sm">AIモデルの効率的な運用・更新とライフサイクル管理</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">AIセキュリティ</h5>
                    <p className="text-slate-600 text-sm">AIシステムとデータを外部攻撃から保護する対策</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">プライバシー</h5>
                    <p className="text-slate-600 text-sm">個人データの適切な取り扱いとプライバシー保護</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              包括的なAI TRiSMサービス
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AIの導入から運用まで、企業の成長段階に合わせた最適なソリューションを提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trust */}
            <div className="bg-white p-8 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Trust（信頼性）</h3>
              <p className="text-slate-600 mb-4">
                AIシステムの信頼性を確保し、透明性と説明可能性を実現します
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 説明可能性の実装</li>
                <li>• 透明性の確保</li>
                <li>• 信頼性評価</li>
              </ul>
            </div>

            {/* Risk */}
            <div className="bg-white p-8 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Risk（リスク管理）</h3>
              <p className="text-slate-600 mb-4">
                AI導入におけるリスクを特定・評価し、適切な対策を立案します
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• リスク評価・分析</li>
                <li>• ハルシネーション対策</li>
                <li>• ガバナンス体制構築</li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Security（セキュリティ）</h3>
              <p className="text-slate-600 mb-4">
                AIシステムのセキュリティを強化し、データ保護とプライバシーを確保します
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 外部攻撃対策</li>
                <li>• 内部不正検知</li>
                <li>• データ保護強化</li>
              </ul>
            </div>

            {/* Management */}
            <div className="bg-white p-8 rounded-xl border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Management（ガバナンス）</h3>
              <p className="text-slate-600 mb-4">
                AIガバナンス体制を構築し、継続的な監視と改善を実現します
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• ガバナンス体制構築</li>
                <li>• 継続的監視</li>
                <li>• コンプライアンス対応</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AIビジネス利用における主要な課題
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              企業がAIを活用する際に直面する課題と、Atrismが提供する解決策
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">主要な課題</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">AI × セキュリティ</h4>
                  <p className="text-slate-600 mb-3">
                    入力情報が他者のAI学習に利用される可能性や、事業者ログからの情報漏えいリスク
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 機密情報の外部学習利用</li>
                    <li>• 事業者ログからの漏えい</li>
                    <li>• 内部不正による情報窃取</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">AI × プライバシー</h4>
                  <p className="text-slate-600 mb-3">
                    膨大なデータ学習による個人特定可能性と、生成AIの商用利用制限
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 個人特定情報の含まれる可能性</li>
                    <li>• データ匿名化の課題</li>
                    <li>• 生成AIの商用利用制限</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">AI × ハルシネーション</h4>
                  <p className="text-slate-600 mb-3">
                    存在しない情報を生成する「幻覚」現象と、過学習による精度低下
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 虚偽情報の生成</li>
                    <li>• 過学習による精度低下</li>
                    <li>• 出力内容の検証必要性</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">Atrismの解決策</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">セキュリティ強化</h4>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• 機密情報入力の徹底禁止</li>
                    <li>• 内部不正検知システム導入</li>
                    <li>• コンプライアンス研修実施</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">プライバシー保護</h4>
                  <ul className="text-sm text-green-800 space-y-2">
                    <li>• データ匿名化技術導入</li>
                    <li>• 適切なデータ処理体制</li>
                    <li>• 商用利用ガイドライン策定</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-900 mb-3">ハルシネーション対策</h4>
                  <ul className="text-sm text-purple-800 space-y-2">
                    <li>• 出力内容検証体制構築</li>
                    <li>• 利用者向けガイドライン策定</li>
                    <li>• リスクマネジメント体制</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Atrismが選ばれる理由
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              豊富な実績と専門知識で、企業のAI戦略を成功に導きます
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">専門性</h3>
              <p className="opacity-90">
                AI TRiSMの専門家が、業界の最新トレンドとベストプラクティスを提供
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">迅速性</h3>
              <p className="opacity-90">
                迅速な対応と実装で、競争優位性を早期に獲得
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">継続サポート</h3>
              <p className="opacity-90">
                導入後の継続的なサポートで、長期的な成功を保証
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">実装プロセス</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2">現状分析</h4>
                <p className="text-sm opacity-90">AI利用状況とリスクの洗い出し</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2">戦略策定</h4>
                <p className="text-sm opacity-90">AI TRiSM戦略の策定</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2">実装支援</h4>
                <p className="text-sm opacity-90">体制構築とシステム導入</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-semibold text-white mb-2">継続改善</h4>
                <p className="text-sm opacity-90">監視と継続的改善</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">ベストプラクティス</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">セキュリティ対策</h4>
                <ul className="text-sm opacity-90 space-y-2">
                  <li>• 機密情報のAI入力禁止の徹底</li>
                  <li>• 内部不正検知システムの導入</li>
                  <li>• 定期的なコンプライアンス研修</li>
                  <li>• アクセス制御と監査ログ</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-3">プライバシー保護</h4>
                <ul className="text-sm opacity-90 space-y-2">
                  <li>• データ匿名化技術の活用</li>
                  <li>• 個人情報の適切な処理</li>
                  <li>• 商用利用ガイドライン策定</li>
                  <li>• 定期的なプライバシー監査</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              業界別AI TRiSMソリューション
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              各業界の特性に合わせたAI TRiSM戦略を提供します
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">金融業界</h3>
              <p className="text-slate-600 mb-4">
                厳格なコンプライアンス要件とリスク管理を重視したAI TRiSM戦略
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 金融規制対応</li>
                <li>• リスク管理強化</li>
                <li>• 顧客データ保護</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">医療業界</h3>
              <p className="text-slate-600 mb-4">
                患者のプライバシーと医療データの安全性を最優先としたAI活用
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• HIPAA準拠</li>
                <li>• 患者データ保護</li>
                <li>• 医療倫理対応</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">製造業界</h3>
              <p className="text-slate-600 mb-4">
                品質管理と生産性向上を両立するAI TRiSM戦略
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 品質保証強化</li>
                <li>• サプライチェーン管理</li>
                <li>• 予知保全最適化</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">小売業界</h3>
              <p className="text-slate-600 mb-4">
                顧客体験向上とデータプライバシーを両立するAI戦略
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 顧客データ保護</li>
                <li>• パーソナライゼーション</li>
                <li>• 在庫最適化</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-xl border border-teal-100">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">IT・テクノロジー</h3>
              <p className="text-slate-600 mb-4">
                革新的なAI技術と安全性を両立する開発・運用体制
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• セキュア開発</li>
                <li>• 継続的監視</li>
                <li>• 迅速な対応</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">その他業界</h3>
              <p className="text-slate-600 mb-4">
                業界特性に応じたカスタマイズされたAI TRiSM戦略
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 業界別要件対応</li>
                <li>• カスタムソリューション</li>
                <li>• 継続的改善</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                企業のAI戦略を成功に導く
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Atrismは、企業がAIを安全かつ効果的に活用できるよう、
                AI TRiSMの観点から包括的なコンサルティングサービスを提供しています。
              </p>
              <p className="text-lg text-slate-600 mb-8">
                豊富な実績と専門知識を持つチームが、
                お客様のビジネス目標に合わせた最適なソリューションを提案し、
                AI戦略の成功をサポートします。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                  <div className="text-slate-600">支援企業数</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-slate-600">顧客満足度</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">対象企業</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  中堅・大手企業
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AI導入を検討中の企業
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  金融・医療・製造業
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  コンプライアンス重視企業
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              お問い合わせ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI TRiSMについてのご相談や、サービス詳細についてお気軽にお問い合わせください
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                無料相談を申し込む
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="株式会社サンプル"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    お問い合わせ内容
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="AI TRiSMについて詳しく知りたい、導入を検討しているなど"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  送信する
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                連絡先情報
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">メール</h4>
                    <p className="text-slate-600">info@atrism.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">電話</h4>
                    <p className="text-slate-600">03-1234-5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">所在地</h4>
                    <p className="text-slate-600">東京都渋谷区渋谷1-1-1<br />渋谷スクランブルスクエア 15階</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-3">営業時間</h4>
                <p className="text-slate-600">
                  平日 9:00-18:00<br />
                  土日祝日は休業
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Atrism</h3>
              <p className="text-slate-400">
                AI TRiSMコンサルティングサービスで、企業のAI戦略を成功に導きます。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Trust（信頼性）</li>
                <li>Risk（リスク管理）</li>
                <li>Security（セキュリティ）</li>
                <li>Management（ガバナンス）</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-slate-400">
                <li>会社概要</li>
                <li>実績</li>
                <li>チーム</li>
                <li>採用情報</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-slate-400">
                <li>info@atrism.com</li>
                <li>03-1234-5678</li>
                <li>東京都渋谷区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Atrism. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
