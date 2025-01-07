"use server"
import { ClientLink } from "./components/clientLink";
import { ClientImage } from "./components/clientImage";

export function HomeHeader(){

    return (
        <header className="main_header">
            <nav id="nav_sp" className="sp">
                <ul className="nav_box">
                    <li className="nav_link"><a href="./service/index.html">SERVICE</a></li>
                    <li className="nav_link"><a href="./case/index.html">CASE</a></li>
                    <li className="nav_link"><a href="./company/index.html">COMPANY</a></li>
                    <li className="nav_link"><a href="./recruit/index.html">RECRUIT</a></li>
                    <li className="nav_link"><a href="./contact.html">CONTACT</a></li>
                    <li className="nav_mask"></li>
                </ul>
            </nav>
            <div className="sp_menu">
            <i></i><i></i><i></i>
            </div>
            <div className="wrap_mv">
                <ul className="slider">
                    <li>
                        <ClientImage
                            src="./img/mv_01.png"
                            alt="IoTが製造業の未来を変える　ハードウェアだけではなく、顧客が求める結果を出すサービスを提供することで顧客のビジネスにどう貢献するか、次世代の製造業には求められています。AIMNEXTはスマートファクトリーの導入からIoT時代を勝ち抜くビジネスモデル変革までをお手伝いさせていただきます。" 
                        />
                    </li>
                    <li>
                        <ClientImage 
                            src="./img/mv_02.png" 
                            alt="ソフトウェアマネジメントの優劣が企業の競争力を決める　日々の進化に加え、巨大化、複雑化するソフトウェアをどうマネージしていくか。製品開発における様々なソフトウェアの課題に対して、ソフトウェアエンジニアリングのエキスパートがコンサルティング、設計、実装、テスト、リファクタリングまで多様な手法でお手伝いいたします。"
                        />
                    </li>
                    <li>
                        <ClientImage 
                            src="./img/mv_03.png" 
                            alt="製造業の基本を確固たるものに　技術情報管理から生産管理、販売管理、SCMといった製造業のコアプロセスを最新の情報技術を駆使しながら確固たるものに変革していくこと製造業のエキスパートがお手伝いさせていただきます。"
                        />
                    </li>
                    <li>
                        <ClientImage 
                            src="./img/mv_04.png" 
                            alt="システム構築を確実にスピーディーに　情報システム導入における、PMO、設計、開発、テストにおいて豊富な経験と知識を持ったTEAMがお手伝いさせていただきます。新規アプリケーションだけでなく、既存システムのモダナイゼーションまで安心してお任せください"
                        />
                    </li>
                    <li>
                        <ClientImage 
                            src="./img/mv_05.png" 
                            alt="コンサルティングの枠を超えて　コンサルタント、エンジニア、研究開発者、事業経験者と様々なバックグランドを持ったプロフェッショナルが従来のコンサルティングの枠を超えTEAMとなり国境を越えてお客様の課題解決をサポートいたします。"
                        />
                    </li>
                </ul>
            </div>
            <div className="top_wrap">
                <nav className="main_nav">
                    <ul>
                        <li> {/*href は後程修正 */}
                            <ClientLink href="./service/index.html">SERVICE</ClientLink> 
                        </li>
                        <li>
                            <ClientLink href="./case/index.html">CASE</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="./company/index.html">COMPANY</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="./recruit/index.html">RECRUIT</ClientLink>
                        </li>
                        <li>
                            <ClientLink href="./contact.html">CONTACT</ClientLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}