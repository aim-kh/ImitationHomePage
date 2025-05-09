

export const breadCrumbNameMap: Record<string, string> = {
    "/": "HOME",
    "/service": "SERVICE",
    "/service/industry": "インダストリー4.0・スマートファクトリー・製造業におけるIoT",
    "/service/product-development": "PDM・製品開発・コスト削減",
    "/service/scm-production": "SCM・生産管理・品質管理",
    "/service/training": "人材育成",
    "/service/overseas": "海外進出(東南アジア、中南米)・グローバル化支援",
    "/service/system-implement":"IT統制・ITアウトソーシング・システム開発及び運用",
    "/service/software-quality-improvement":"ソフトウェア・品質・改善",
    "/service/modernise":"ITモダナイゼーション・アーキテクチャ最新化",
    "/service/regional-IoT-platform":"IoT企画・開発支援/自治体スマートタウン構築",
    "/service/technology":"テクノロジー ～探求と挑戦～",
    "/case":"CASE",
}


export const breadCrumbTree = {
    "/": {
        name: "HOME",
        children: {}
    },
    "/service": {
        name: "SERVICE",
        children: {
            "/service/industry": "インダストリー4.0・スマートファクトリー・製造業におけるIoT",
            "/service/product-development": "PDM・製品開発・コスト削減",
            "/service/scm-production": "SCM・生産管理・品質管理",
            "/service/training": "人材育成",
            "/service/overseas": "海外進出(東南アジア、中南米)・グローバル化支援",
            "/service/system-implement":"IT統制・ITアウトソーシング・システム開発及び運用",
            "/service/software-quality-improvement":"ソフトウェア・品質・改善",
            "/service/modernise":"ITモダナイゼーション・アーキテクチャ最新化",
            "/service/regional-IoT-platform":"IoT企画・開発支援/自治体スマートタウン構築",
            "/service/technology":"テクノロジー ～探求と挑戦～",
        }
    },
    "/case": {
        name: "CASE",
        children: {}
    }
}