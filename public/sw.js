// 空のService Worker - 404エラーを防ぐためのファイル
// このファイルは、ブラウザがService Workerを探す際の404エラーを防ぐために配置されています

self.addEventListener('install', (event) => {
  // Service Workerのインストール時の処理
  // 現在は何も行わない
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  // Service Workerのアクティベート時の処理
  // 現在は何も行わない
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // フェッチイベントの処理
  // 現在はデフォルトの動作（通常のネットワークリクエスト）を行う
  // 将来的にPWA機能を実装する場合はここにキャッシュ戦略を追加
});