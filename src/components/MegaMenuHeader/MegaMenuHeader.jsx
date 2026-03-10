import styles from "./MegaMenuHeader.module.css";

export default function MegaMenuHeader() {
  return (
    <>
      <header className={styles.siteHeader}>
        <div className={styles.headerInner}>
          <h1 className={styles.logo}>test</h1>

          <nav
            className={styles.globalNav}
            aria-label="グローバルナビゲーション"
          >
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${styles.navAbout}`}>
                <a href="#" className={styles.navLink}>
                  私たちについて
                </a>
              </li>
              <li className={`${styles.navItem} ${styles.navJoin}`}>
                <a href="#" className={styles.navLink}>
                  入会案内
                </a>
              </li>
              <li className={`${styles.navItem} ${styles.navDocs}`}>
                <a href="#" className={styles.navLink}>
                  各種資料・動画
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* 私たちについて */}
        <div className={`${styles.megaMenu} ${styles.megaAbout}`}>
          <div className={styles.megaInner}>
            <div className={styles.megaTop}>
              <a href="#" className={styles.megaTopLink}>
                ニュース・トピックス
              </a>
              <a href="#" className={styles.megaTopLink}>
                協会案内
              </a>
              <a href="#" className={styles.megaTopLink}>
                事業内容
              </a>
              <a href="#" className={styles.megaTopLink}>
                パンフレット・報告書
              </a>
              <a href="#" className={styles.megaTopLink}>
                活動実績
              </a>
            </div>

            <div className={styles.megaBottom}>
              <a href="#" className={styles.megaSubLink}>
                協会案内トップ
              </a>
              <a href="#" className={styles.megaSubLink}>
                概要・アクセス
              </a>
              <a href="#" className={styles.megaSubLink}>
                ご挨拶
              </a>
              <a href="#" className={styles.megaSubLink}>
                沿革
              </a>
              <a href="#" className={styles.megaSubLink}>
                会員・組織
              </a>
              <a href="#" className={styles.megaSubLink}>
                情報公開
              </a>
            </div>
          </div>
        </div>

        {/* 入会案内 */}
        <div className={`${styles.megaMenu} ${styles.megaJoin}`}>
          <div className={styles.megaInner}>
            <div className={styles.megaTop}>
              <a href="#" className={styles.megaTopLink}>
                入会の流れ
              </a>
              <a href="#" className={styles.megaTopLink}>
                会員種別
              </a>
              <a href="#" className={styles.megaTopLink}>
                会費について
              </a>
              <a href="#" className={styles.megaTopLink}>
                よくある質問
              </a>
            </div>

            <div className={styles.megaBottom}>
              <a href="#" className={styles.megaSubLink}>
                入会案内トップ
              </a>
              <a href="#" className={styles.megaSubLink}>
                申込方法
              </a>
              <a href="#" className={styles.megaSubLink}>
                必要書類
              </a>
              <a href="#" className={styles.megaSubLink}>
                会員特典
              </a>
              <a href="#" className={styles.megaSubLink}>
                お問い合わせ
              </a>
            </div>
          </div>
        </div>

        {/* 各種資料・動画 */}
        <div className={`${styles.megaMenu} ${styles.megaDocs}`}>
          <div className={styles.megaInner}>
            <div className={styles.megaTop}>
              <a href="#" className={styles.megaTopLink}>
                各種資料
              </a>
              <a href="#" className={styles.megaTopLink}>
                ガイドライン
              </a>
              <a href="#" className={styles.megaTopLink}>
                動画コンテンツ
              </a>
              <a href="#" className={styles.megaTopLink}>
                ダウンロード
              </a>
            </div>

            <div className={styles.megaBottom}>
              <a href="#" className={styles.megaSubLink}>
                資料一覧
              </a>
              <a href="#" className={styles.megaSubLink}>
                動画一覧
              </a>
              <a href="#" className={styles.megaSubLink}>
                申請書類
              </a>
              <a href="#" className={styles.megaSubLink}>
                報告書
              </a>
              <a href="#" className={styles.megaSubLink}>
                アーカイブ
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
