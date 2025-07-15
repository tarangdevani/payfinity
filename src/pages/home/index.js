import "../../assets/css/landingPageMain.css";
import { useState } from "react";

import heroImage from "../../assets/images/heroImageDark.png";
import heroImageLight from "../../assets/images/heroImageLight.png";
import cardIcon from "../../assets/images/cardsIcon.png";
import coinIcon from "../../assets/images/coinIcon.png";
import networkIcon from "../../assets/images/networkIcon.png";
import walletIcon from "../../assets/images/walletIcon.png";
import ringBackgroung from "../../assets/images/ringbackground.png";
import number1 from "../../assets/images/01.png";
import number2 from "../../assets/images/02.png";
import number3 from "../../assets/images/03.png";
import deviceImage from "../../assets/images/device.png";
import roadmap from "../../assets/images/timeline.svg";
import roadmapLight from "../../assets/images/timelineLight.svg";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function Home() {
  const [theamMode, settheamMode] = useState("dark");
  const localtheamMode = localStorage.getItem("theamMode");
  if (localtheamMode) {
    if (localtheamMode == "light" && theamMode !== "light") {
      settheamMode("light");
    } else if (localtheamMode == "dark" && theamMode !== "dark") {
      settheamMode("dark");
    }
  } else {
    localStorage.setItem("theamMode", "dark");
  }

  const data = {
    labels: ["20%", "20%", "15%", "15%", "10%", "10%", "10%"],
    datasets: [
      {
        data: [20, 20, 15, 15, 10, 10, 10],
        backgroundColor: [
          "#26c6da", // cyan
          "#4a5568", // dark gray
          "#5c6bc0", // indigo
          "#42a5f5", // blue
          "#ec407a", // pink
          "#ffa726", // orange
          "#ffeb3b", // yellow
        ],
        borderWidth: 0,
        cutout: "60%", // donut hole
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
    },
  };
  return (
    <>
      <div className={`main pt-5 ${theamMode == "dark" ? "dark" : "light"}`}>
        <Header />
        <section className="w-100 overflow-hidden">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center">
              <div className="col-md-7 py-5 p-md-0">
                <h1 className="text400 text-white font-poly text59">
                  Finance. <br />{" "}
                  <span className="text-gradient">Freedom.</span> Frictionless.
                </h1>
                <p className="text-gray text500 text16">
                  Payfinity is an all-in-one decentralized crypto finance
                  platform built for the future of digital payments. It empowers
                  users with seamless wallet-to-wallet transactions, a robust
                  crypto payment gateway for merchants, and virtual crypto cards
                  for instant shopping — all secured on-chain and accessible
                  globally.
                </p>
                <div class="mt-5">
                  <a
                    href="#"
                    className="btn text-white background-gradient text18 px-4 px-md-5 me-3 mb-3"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="btn text-white background-lightWhite text18 px-4 px-md-5 mb-3"
                  >
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-md-5 position-relative hero-image">
                <img
                  src={theamMode == "light" ? heroImageLight : heroImage}
                  alt=""
                  srcset=""
                  className="position-absolute"
                  style={{ top: "0px", left: "-50px" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section class="py-5 text-center text-light">
          <div class="container">
            <h2 class="mb-2 text35 text500 text-white">
              Why Payfinity is for you?
            </h2>
            <p class="mb-5 text14 text500 text-gray ">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry, dummy text of
            </p>

            <div class="row g-3">
              <div class="col-md-6">
                <div class="card background-lightBlue radius20 h-100 p-4">
                  <div>
                    <img
                      src={walletIcon}
                      alt="Wallet Icon"
                      class="img-fluid"
                      style={{ width: "90px" }}
                    />
                  </div>
                  <h5 className="text-white text20 text500 my-3">
                    Wallet-to-Wallet Transfers
                  </h5>
                  <p class="text-gray text16 text500">
                    Direct crypto transfers with zero third-party involvement.
                    Compatible with all major wallets (MetaMask, Trust Wallet,
                    etc.) Built on a low-fee, fast transaction Layer-2 chain.
                  </p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card background-lightBlue radius20 h-100 p-4">
                  <div>
                    <img
                      src={networkIcon}
                      alt="Gateway Icon"
                      class="img-fluid"
                      style={{ width: "90px" }}
                    />
                  </div>
                  <h5 className="text-white text20 text500 my-3">
                    Crypto Payment Gateway
                  </h5>
                  <p class="text-gray text16 text500">
                    Merchants can integrate Payfinity with a simple API or
                    plugin (Shopify, WooCommerce, etc.) Instant conversion to
                    stablecoins or preferred crypto in merchant wallet. Accept
                    payments in multiple tokens: USDT, ETH, BTC, and $PAYF.
                  </p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card background-lightBlue radius20 h-100 p-4">
                  <div>
                    <img
                      src={cardIcon}
                      alt="Card Icon"
                      class="img-fluid"
                      style={{ width: "90px" }}
                    />
                  </div>
                  <h5 className="text-white text20 text500 my-3">
                    Virtual Crypto Cards
                  </h5>
                  <p class="text-gray text16 text500">
                    Users can generate VISA/Mastercard-compatible virtual cards
                    linked to their Payfinity wallet. Cards are topped up using
                    crypto and usable on global e-commerce platforms. Includes a
                    spending dashboard and transaction analytics.
                  </p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="card background-lightBlue radius20 h-100 p-4">
                  <div>
                    <img
                      src={coinIcon}
                      alt="Fiat Icon"
                      class="img-fluid"
                      style={{ width: "90px" }}
                    />
                  </div>
                  <h5 className="text-white text20 text500 my-3">
                    Fiat Off-Ramp (Phase 2)
                  </h5>
                  <p class="text-gray text16 text500">
                    Convert crypto to fiat and withdraw to linked bank accounts
                    in supported countries. KYC required for fiat withdrawals.
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-4 row gap-4 justify-content-center">
              <a
                href="#"
                className="btn text-white background-gradient text18 px-5 w-auto"
              >
                Get started
              </a>
              <a
                href="#"
                className="btn text-white background-lightWhite text18 px-5 w-auto"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section class="py-5 text-center text-light">
          <div class="container">
            <h2 class="mb-2 text35 text500 text-white">Airdrop Model</h2>
            <p class="mb-5 text14 text500 text-gray ">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry, dummy text of
            </p>

            <div class="card text-start text-light border-0 background-blue radius20">
              <div class="card-body d-flex flex-column flex-md-row justify-content-between align-items-center position-relative overflow-hidden bonus-padding">
                <div>
                  <h4 class="mb-2 text35 text500 text-white">Signup Bonus</h4>
                  <p class="mb-0 text25 text400 text-white">
                    1,000 $PAYF tokens (~$10 value)
                  </p>
                </div>

                <div class="mt-3 mt-md-0 row gap-3 justify-content-center">
                  <a
                    href="#"
                    class="btn background-white text-blue text18 px-4 w-auto"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    class="btn text-white border1 background-lightWhite text18 px-4 w-auto"
                  >
                    Learn more
                  </a>
                </div>

                <img
                  class="position-absolute"
                  src={ringBackgroung}
                  style={{
                    opacity: "0.2",
                    width: "350px",
                    right: "-23px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-5 text-center text-light">
          <div className="container">
            <h2 className="mb-5 text35 text500 text-white">
              Referral Program (3-Level)
            </h2>
            <div className="row g-4">
              {/* Level 1 */}
              <div className="col-md-4">
                <div className="card background-lightBlue radius20 h-100 p-4">
                  <div className="d-flex justify-content-between align-items-center borderBottom pb-3">
                    <h5 className="mb-0 text-white text30 text500">Level</h5>
                    <img src={number1} alt="" srcset="" width="50px" />
                  </div>
                  <h6 className="mb-5 mt-4 text-start text-white text20 text500">
                    Direct Referral (10%)
                  </h6>
                  <p className="text-gray text-start text16 text500 mb-0">
                    10% of referred user's transaction / spending fee
                  </p>
                </div>
              </div>

              {/* Level 2 */}
              <div className="col-md-4">
                <div className="card background-lightBlue radius20 h-100 p-4">
                  <div className="d-flex justify-content-between align-items-center borderBottom pb-3">
                    <h5 className="mb-0 text-white text30 text500">Level</h5>
                    <img src={number2} alt="" srcset="" width="50px" />
                  </div>
                  <h6 className="mb-5 mt-4 text-start text-white text20 text500">
                    Indirect Referral (5%)
                  </h6>
                  <p className="text-gray text-start text16 text500 mb-0">
                    When your referrals bring in others, you earn 5% from those
                    second-level users' fees. Grow your network and keep
                    earning.
                  </p>
                </div>
              </div>

              {/* Level 3 */}
              <div className="col-md-4">
                <div className="card background-lightBlue radius20 h-100 p-4">
                  <div className="d-flex justify-content-between align-items-center borderBottom pb-3">
                    <h5 className="mb-0 text-white text30 text500">Level</h5>
                    <img src={number3} alt="" srcset="" width="50px" />
                  </div>
                  <h6 className="mb-5 mt-4 text-start text-white text20 text500">
                    Extended Network (2%)
                  </h6>
                  <p className="text-gray text-start text16 text500 mb-0">
                    Get 2% from users referred by your second-level connections.
                    Even your extended community helps you earn continuously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5" style={{ marginTop: "200px" }}>
          <div className="container">
            <div className="card border-0 text-light background-blue radius20">
              <div className="row g-0 align-items-center">
                {/* Left: Phone Image */}
                <div className="col-md-6 text-center p-4 position-relative bonus-image">
                  <img
                    src={deviceImage}
                    alt="Phone"
                    style={{ left: "0", bottom: "-50px" }}
                    className="position-absolute"
                  />
                </div>

                {/* Right: Text & Buttons */}
                <div className="col-md-6 p-4">
                  <h4 className="text30 text500 text-white">Bonus Campaigns</h4>
                  <p className="text14 text500 mb-2">
                    On-chain tasks (use wallet, spend with card, invite friends)
                  </p>
                  <p className="small mb-5">
                    Weekly leaderboard rewards for top promoters
                  </p>

                  <div class="mt-3">
                    <a
                      href="#"
                      class="btn background-white text-blue text18 px-4 me-2"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      class="btn text-white background-lightWhite text18 px-4 border1"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-light py-5">
          <div className="container">
            {/* Header */}
            <div className="text-center text-light py-3 mb-4 background-blue radius20">
              <h3 className="text35 text500 text-white">Tokenomics</h3>
              <p className="text30 text500 text-white">
                1,000,000,000 Total Supply
              </p>
            </div>

            {/* Content */}
            <div className="row g-4 align-items-center">
              {/* Left: Chart */}
              <div className="col-md-6 text-center ">
                <div className="chart-image position-relative m-auto">
                  <Doughnut data={data} options={options} />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "48px",
                      fontWeight: "600",
                      color: theamMode == "light" ? "#000000" : "#ffffff",
                    }}
                  >
                    100%
                  </div>
                </div>
                {/* <img
                  src={theamMode == "light" ? chartLight : chart}
                  alt="Token Distribution Chart"
                /> */}
              </div>

              {/* Right: ICO Allocation */}
              <div className="col-md-6">
                <div className="p-4 background-lightBlue radius20">
                  <h5 className="text30 text500 text-white">ICO Allocation:</h5>
                  <ul className="list-unstyled mt-4">
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#1abc9c" }}>●</span> Public Sale
                      (200M)
                    </li>
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#7f8c8d" }}>●</span> Ecosystem
                      Rewards (airdrop, referral, loyalty)
                    </li>
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#2980b9" }}>●</span> Team &
                      Advisors (12-month lock, 24-month vesting)
                    </li>
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#8e44ad" }}>●</span> Liquidity &
                      Exchanges
                    </li>
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#e84393" }}>●</span>{" "}
                      Treasury/Reserves
                    </li>
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#f39c12" }}>●</span> Product
                      Development
                    </li>
                    <li className="text20 text-gray text400 mb-2 font-roboto">
                      <span style={{ color: "#f1c40f" }}>●</span> Marketing &
                      Partnerships
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-light py-5">
          <div className="container">
            <h3 className="text-center mb-4 text35 text500 text-white">
              ICO Phases
            </h3>

            <div className="p-3 background-lightBlue radius20">
              <div className="table-responsive">
                <table className="table-borderless mb-0 w-100">
                  <thead>
                    <tr>
                      <th className="py-3 text28 text500 text-lightBlue">
                        Phase
                      </th>
                      <th className="py-3 text28 text500 text-lightBlue">
                        Token Price
                      </th>
                      <th className="py-3 text28 text500 text-lightBlue">
                        Tokens Allocated
                      </th>
                      <th className="py-3 text28 text500 text-lightBlue">
                        Raise Target
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="tableRowDarkGrayColor">
                      <td className="p-2 text20 text500 text-white">
                        Seed (private)
                      </td>
                      <td className="p-2 text20 text500 text-white">$0.015</td>
                      <td className="p-2 text20 text500 text-white">40M</td>
                      <td className="p-2 text20 text500 text-white">
                        $600,000
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text20 text500 text-white">Phase 1</td>
                      <td className="p-2 text20 text500 text-white">$0.02</td>
                      <td className="p-2 text20 text500 text-white">60M</td>
                      <td className="p-2 text20 text500 text-white">
                        $1,200,000
                      </td>
                    </tr>
                    <tr className="tableRowDarkGrayColor">
                      <td className="p-2 text20 text500 text-white">Phase 2</td>
                      <td className="p-2 text20 text500 text-white">$0.025</td>
                      <td className="p-2 text20 text500 text-white">60M</td>
                      <td className="p-2 text20 text500 text-white">
                        $1,500,000
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 text20 text500 text-white">Phase 3</td>
                      <td className="p-2 text20 text500 text-white">$0.03</td>
                      <td className="p-2 text20 text500 text-white">40M</td>
                      <td className="p-2 text20 text500 text-white">
                        $1,200,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center mt-5">
                <h5 className="text30 text500 text-lightBlue">
                  Total Raise Target: $5,000,000
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="text-light py-5">
          <div className="container">
            <h3 className="text-center text35 text-white text500 mb-4">
              Token Utility
            </h3>

            <div className="d-grid gap-3">
              <div className="py-3 px-2 text-center text-white text20 text500 radius10 background-blue">
                Gasless fees for wallet transactions and card top-ups
              </div>

              <div className="py-3 px-2 text-center text-white text20 text500 radius10 background-blue">
                Discounts on merchant gateway transaction fees
              </div>

              <div className="py-3 px-2 text-center text-white text20 text500 radius10 background-blue">
                Governance rights (vote on features, card providers,
                integrations)
              </div>

              <div className="py-3 px-2 text-center text-white text20 text500 radius10 background-blue">
                Staking & yield rewards
              </div>

              <div className="py-3 px-2 text-center text-white text20 text500 radius10 background-blue">
                Card cashback: 1-3% on spending in $PAYF
              </div>
            </div>
          </div>
        </section>
        <section className="text-light py-5">
          <div className="container">
            <h3 className="text-center text35 text500 text-white mb-5">
              Roadmap
            </h3>
            <div className="timeline position-relative d-flex justify-content-center">
              <img
                className="mx-auto w-100"
                style={{ maxWidth: "900px" }}
                src={theamMode == "light" ? roadmapLight : roadmap}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Home;
