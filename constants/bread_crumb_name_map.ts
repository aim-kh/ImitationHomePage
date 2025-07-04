

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
    "/site-map":"サイトマップ",
}


export const urlTree = {
    "/": {
        name: "HOME",
        children: {}
    },
    "/service": {
        name: "SERVICE",
        children: {
            "/service/industry": {
                name:"インダストリー4.0・スマートファクトリー・製造業におけるIoT",
                children: {
                    "/service/industry/industry4.0": "Industry4.0",
                    "/service/industry/industry4.0-discussion": "【考察】インダストリー4.0",
                    "/service/industry/industry4.0-iot-discussion": "IoTで何を目指しますか?",
                    "/service/industry/mt-connect": "工作機械のためのオープンプロトコル“MTConnect”",
                    "/service/industry/iso22400": "MES領域のKPI国際標準”ISO22400”",
                    "/service/industry/manufacturing": "製造業のDX(デジタルトランスフォーメーション)",
                    "/service/industry/automotive": "自動車業界のDX(デジタルトランスフォーメーション)",
                    "/service/industry/contact-case-of-introduce-DX": "DX導入事例",
                    "/service/industry/machinery-manufacturing": "機械製造業におけるIT化推進・DX",
                    "/service/industry/sf-digitaltwin": "What is Degitaltwin?",
                    "/service/industry/effect-and-issue-of-iot-in-a-factory": "工場でのIoT 事例から学ぶ効果と課題",
                    "/service/smart-factory":"スマートファクトリー",
                    
                }
            },
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