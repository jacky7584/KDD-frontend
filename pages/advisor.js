import React from 'react';
import Head from 'next/head';
import Layout from '../layouts/default';

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const title = {
  en: { title: en.header, prefix: en.navbar.advisor },
  zh: { title: zh.header, prefix: zh.navbar.advisor },
};

export async function getServerSideProps({ locale }) {
  return {
    props: { locale },
  };
}

export default function Advisor({ locale }) {
  return (
    <>
      <Head>
        <title>
          {title[locale].prefix} | {title[locale].title}
        </title>
        <meta property="og:title" content={`${title[locale].prefix} | ${title[locale].title}`} />
      </Head>
      <h1 className="hidden">
        {title[locale].prefix} | {title[locale].title}
      </h1>
      <main className="profile-page">
        {/* bg-image */}
        <section className="relative block h-96">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-slate-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        {/* content */}
        <section className="relative py-16 bg-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col bg-white shadow-xl rounded-lg -mt-64 p-3 sm:p-12">
              {/* info */}
              <div className="flex flex-row flex-wrap py-3">
                <div className="flex w-full sm:w-fit justify-center sm:justify-start  mt-6 sm:mt-0">
                  <picture>
                    <img
                      src="/img/brdai.jpeg"
                      alt="Bi-Ru Dai"
                      className="max-w-[100px] self-center shadow-xl rounded-lg align-middle border-none"
                    />
                  </picture>
                </div>
                <div className="flex flex-col w-full sm:w-fit text-center sm:text-start mt-2 sm:mt-0 sm:ml-4 md:mx-6 sm:py-2">
                  <h3 className="text-2xl lg:text-4xl font-semibold leading-normal text-slate-700">戴碧如</h3>
                  <h3 className="text-xl lg:text-2xl font-semibold leading-normal text-slate-700 mb-2">Bi-Ru Dai</h3>
                  <div className="text-md lg:text-lg leading-normal mt-auto text-slate-400 uppercase">
                    國立台灣科技大學 資訊工程系 副教授
                  </div>
                </div>
                <div className="flex flex-col w-full sm:w-fit text-center justify-around sm:text-start mt-2 lg:mt-0 lg:ml-4 sm:py-2">
                  <div className="mb-2 text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-building mr-2 text-slate-400"></i>
                    106 台北市大安區基隆路四段 43 號 T4-514
                  </div>
                  <div className="mb-2 text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-telephone mr-2 text-slate-400"></i>
                    886-2-27301218
                  </div>
                  <div className="mb-2 text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-printer mr-2 text-slate-400"></i>
                    886-2-27301081
                  </div>
                  <div className="text-slate-600 text-sm lg:text-md">
                    <i className="bi bi-envelope mr-2 text-slate-400"></i>
                    brdai@csie.ntust.edu.tw
                  </div>
                </div>
              </div>

              {/* research, teaching */}
              <div className="border-t border-slate-200 px-2 md:p-6 lg:p-12">
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">學歷</h4>
                  <div className="mb-4 text-md sm:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside">
                      <li>國立台灣大學 電機工程學研究所 博士</li>
                      <li>國立台灣大學 電機工程學系 學士</li>
                    </ul>
                  </div>
                </div>
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">研究領域</h4>
                  <div className="mb-4 text-md sm:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside">
                      <li>資料探勘</li>
                      <li>資料串流管理</li>
                      <li>社群網路分析</li>
                    </ul>
                  </div>
                </div>
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">教學</h4>
                  <div className="mb-4 text-md sm:text-lg leading-relaxed text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside">
                      <li>計算機概論</li>
                      <li>離散數學</li>
                      <li>計算機結構</li>
                      <li>資料探勘</li>
                      <li>資料串流探勘</li>
                      <li>高等資料探勘</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* publication */}
              <div className="border-t border-slate-200 px-2 md:p-6 lg:p-12">
                <div className="my-4">
                  <h4 className="mb-4 text-xl sm:text-2xl font-semibold text-slate-900">著作</h4>
                 
                  <div className="mb-4 text-sm leading-loose text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside ">
                      <li>
                      Cheng-Han Chou, Bi-Ru Dai:&quot;Semantic Analysis and Preference Capturing on Attentive Networks for
                      Rating Prediction.&quot; IEEE Global Communications Conference, 2021.
                      </li>

                      <li>
                      Shanlei Ko , Bi-Ru Dai:&quot;Multi-Laplacian GAN with Edge Enhancement for Face Super Resolution.&quot;
                      International Conference on Pattern Recognition, 2020 : 3505-3512 (EI)
                      </li>

                      <li>
                      Chieh-Ming Liaw, Bi-Ru Dai:Live Stream Highlight Detection Using Chat Messages. MDM 2020: 328-2. (EI)
                      </li>

                      <li>
                      Kuei-Sheng Lin , Bi-Ru Dai.&quot;BIOG: An Effective and Efficient Algorithm for Influence Blocking
                      Maximization in Social Networks.&quot; DMBD 2019: Data Mining and Big Data pp 328-337. (EI)
                      </li>

                      <li>
                      Ye-Yan Zeng, and Bi-Ru Dai: A Multi-label Threshold Learning Framework for Propagation Algorithms
                      on a Non-feature Network. IEEE Global Communications Conference, 2018. (EI).
                      </li>

                      <li>
                      Yi Tang, and Bi-Ru Dai: A Partial Demand Fulfilling Capacity Constrained Clustering Algorithm to
                      Static Bike Rebalancing Problem. Industrial Conference on Data Mining. Springer, Cham, 2018. (EI)
                      </li>

                      <li>
                      Kai-Lung Hua, Bi-Ru Dai, Kathiravan Srinivasan, You-Hsiang Hsu, Vishal Sharma: A hybrid NSCT
                      domain image watermarking scheme. EURASIP J. Image and Video Processing 2017: 10 (2017) (SCI)
                      </li>

                      <li>
                      Qiao Yu, Bi-Ru Dai: Accelerating K-Means by Grouping Points Automatically. DaWaK 2017: 199-213(EI)
                      </li>
  
                      <li>
                      Zhun-Zheng Lin, Bi-Ru Dai: Reweighting Forest for Extreme Multi-label Classification. DaWaK 2017:286-299 (EI)
                      </li>

                      <li>
                      Mu-Yao Fang, Bi-Ru Dai: Power of Bosom Friends, POI Recommendation by Learning Preference of Close Friends and Similar Users. DaWaK 2016: 179-192 (EI)
                      </li>

                      <li>
                      Sin-Kai Wang, Bi-Ru Dai: A G-Means Update Ensemble Learning Approach for the Imbalanced Data Stream with Concept Drifts. DaWaK 2016: 255-266 (EI)
                      </li>

                      <li>
                      Chih-Heng Chung, Bi-Ru Dai: A Framework of the Semi-supervised Multi-label Classification with
                      Non-uniformly Distributed Incomplete Labels. DaWaK 2016: 267-280 (EI)
                      </li>

                      <li>
                      Bing-Hao Huang, Bi-Ru Dai: A Weighted Distance Similarity Model to Improve the Accuracy of
                      Collaborative Recommender System. MDM (2) 2015: 104-109 (EI)
                      </li>

                      <li>
                      Bo-Yu Hsiao, Chih-Heng Chung, Bi-Ru Dai: A Model of Relevant Common Author and Citation
                      Authority Propagation for Citation Recommendation. MDM (2) 2015: 117-119 (EI)
                      </li>

                      <li>
                      Chih-Heng Chung, Bi-Ru Dai: A fragment-based iterative consensus clustering algorithm with a robust
                      similarity. Knowl. Inf. Syst. 41(3): 591-609 (2014) (SCI)
                      </li>

                      <li>
                      Huei-Yu Lung, Chih-Heng Chung, Bi-Ru Dai: Predicting Locations of Mobile Users Based on Behavior
                      Semantic Mining. PAKDD Workshops 2014: 168-180 (EI)
                      </li>

                      <li>Chung-Kai Tseng, Chih-Heng Chung, Bi-Ru Dai: Classifying the TRIZ Contradiction Problem of the
                      Patents Based on Engineering Parameters. TAAI 2014: 344-353 (EI)
                      </li>

                      <li>
                      Po-Wei Liang, Bi-Ru Dai: Opinion Mining on Social Media Data. MDM (2) 2013: 91-96 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, I-Chang Lin: Efficient Map/Reduce-Based DBSCAN Algorithm with Optimized Data Partition. 
                      IEEE CLOUD 2012: 59-66 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Chih-Heng Chung: LF-CARS: A Loose Fragment-Based Consensus Clustering Algorithm with a 
                      Robust Similarity. Discovery Science 2012: 154-168 (EI)
                      </li>

                      <li>
                      Yong-Huai Huang, Kuo-Liang Chung, Bi-Ru Dai: Improved inverse halftoning using vector and texture-lookup 
                      table-based learning approach. Expert Syst. Appl. 38(12): 15573-15581 (2011) (EI)(SCI)
                      </li>

                      <li>
                      張旭沅、李綱、戴碧如、鍾至衡、龍徽猷（2011年11月）。結合車載資通訊與雲端運算技術開發協同式路面狀態監控系統之研究。 
                      The 16th National Conference on Vehicle Engineering
                        （中華民國第十六屆車輛工程學術研討會），Taipei, Taiwan。
                      </li>

                      <li>
                      Bi-Ru Dai, Chang-Yi Lee, Chih-Heng Chung: A Framework of Recommendation System Based on 
                      Both Network Structure and Messages. ASONAM 2011: 709-714 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Meng-Yan Lin: Efficiently Mining Dynamic Zonal Co-location Patterns Based on 
                      Maximal Co-locations. ICDM Workshops 2011: 861-868 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Shu-Ming Hsu: An Instance Selection Algorithm Based on Reverse Nearest Neighbor. 
                      PAKDD (1) 2011: 1-12 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Chang-Yi Lee: CSM: A Framework of Recommendation System Combining Network Structure 
                      and Messages. Journal of Computers, 22(2): 11-22 (2011) (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Pai-Yu Lin: iTM: An Efficient Algorithm for Frequent Pattern Mining in the Incremental 
                      Database without Rescanning. IEA/AIE 2009: 757-766 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Yang-Tze Lin: A Decision Tree Based Quasi-Identifier Perturbation Technique for 
                      Preserving Privacy in Data Mining. RCIS 2009: 187-196 (EI)
                      </li>

                      <li>
                        Bi-Ru Dai, Cheng-Ru Lin, Ming-Syan Chen: On the Techniques for Data Clustering with Numerical
                        Constraints. SDM 2003: 264-268
                      </li>

                      <li>
                      Ya-Ping Kuo, Pai-Yu Lin, Bi-Ru Dai: Hiding Frequent Patterns under Multiple Sensitive Thresholds. 
                      DEXA 2008: 5-18 (EI)
                      </li>

                      <li>
                      Jen-Wei Huang, Bi-Ru Dai, Ming-Syan Chen: Twain: Two-end association miner with precise frequent 
                      exhibition periods. TKDD 1(2): 8 (2007) (SCI)
                      </li>

                      <li>
                      Mi-Yen Yeh, Bi-Ru Dai, Ming-Syan Chen: Clustering over Multiple Evolving Streams by Events and 
                      Correlations. IEEE Trans. Knowl. Data Eng. 19(10): 1349-1362 (2007) (SCI)
                      </li>

                      <li>
                      Bi-Ru Dai, Cheng-Ru Lin, Ming-Syan Chen: Constrained data clustering by depth control and progressive 
                      constraint relaxation. VLDB J. 16(2): 201-217 (2007) (SCI)
                      </li>

                      <li>
                      Chih-Hua Tai, Bi-Ru Dai, Ming-Syan Chen: Incremental Clustering in Geography and Optimization Spaces. 
                      PAKDD 2007: 272-283 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai and Ming-Syan Chen: Constrained Clustering for the Evolving Data Stream. Journal of Computers, 
                      Special issue on Data Mining, Vol.17, No.4. (2007)
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4 text-sm leading-loose text-slate-700">
                    <ul className="list-disc list-inside sm:list-outside ">
                      <li>
                      Bi-Ru Dai, Jen-Wei Huang, Mi-Yen Yeh, Ming-Syan Chen: Adaptive Clustering for Multiple Evolving Streams. 
                      IEEE Trans. Knowl. Data Eng. 18(9): 1166-1180 (2006) (SCI)
                      </li>
                      <li>
                      Mi-Yen Yeh, Bi-Ru Dai, Ming-Syan Chen: COMET: Event-Driven Clustering over Multiple Evolving Streams. 
                      PAKDD 2006: 719-723 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Jen-Wei Huang, Mi-Yen Yeh, Ming-Syan Chen: Clustering on Demand for Multiple Data Streams. 
                      ICDM 2004: 367-370 (EI)
                      </li>

                      <li>
                      Bi-Ru Dai, Cheng-Ru Lin, Ming-Syan Chen: On the Techniques for Data Clustering with Numerical Constraints. 
                      SDM 2003: 264-268
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

Advisor.layout = Layout;
