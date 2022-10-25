import React from "react";
import _ from "./HomeStyles";
import ImageLeft from "../../components/images/ImageLeft.svg";
import ImageLeftBlue from "../../components/images/ImageLeftBlue.svg";
import ImageRight from "../../components/images/ImageRight.svg";
import ImageRightPB from "../../components/images/ImageRightPB.svg";
import ImageLeftPB2 from "../../components/images/ImageLeftPB2.svg";
import ImageBig from "../../components/images/ImageBig.svg";
import ImageBig2 from "../../components/images/ImageBig2.svg";
import ImageBig3 from "../../components/images/ImageBig3.svg";

const Home = () => {
    return (
        <>
            <div style={_.container1}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard1}>
                        <section style={_.contentImage}>
                            <img src={ImageLeft} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Kelsi Monahan </h2>
                            <h1 style={_.title}>Qui occaecati vero et quibusdam non </h1>
                            <h3 style={_.description}>
                                Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem.
                                Rem nulla illum sint et id dolore voluptas
                            </h3>
                        </section>
                    </section>
                    <section style={_.sectionSmallCard2}>
                        <section style={_.contentImage}>
                            <img src={ImageLeftBlue} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Mrs. Alexanne Schneider </h2>
                            <h1 style={_.title}>Architecto quos rem unde quia accusantium </h1>
                            <h3 style={_.description}>
                                Voluptatum omnis et dolor architecto non totam aspernatur sapiente.
                                Et accusantium rem. Assumenda quia error
                            </h3>
                        </section>
                    </section>
                </section>
            </div>
            <div style={_.container2}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard2}>
                        <section style={_.contentImage}>
                            <img src={ImageBig} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Dagmar Ankunding </h2>
                            <h1 style={_.title}>Repellat aliquam quo sit qui praesentium ut aliquid </h1>
                            <h3 style={_.description}>
                                Ea ut et labore quidem non sit in quidem.
                                Provident est incidunt dignissimos enim qui consequatur numquam.
                            </h3>
                        </section>
                    </section>
                </section>
            </div>
            <div style={_.container3}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard1}>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Ibrahim Satterfield </h2>
                            <h1 style={_.title}>Deleniti et omnis aliquid consequuntur  </h1>
                            <h3 style={_.description}>
                                Voluptas quasi libero adipisci id.
                                Quis cum voluptas atque culpa vitae illo. Sunt ipsam alias occaecati dolorem maxime.
                            </h3>
                        </section>
                        <section style={_.contentImage}>
                            <img src={ImageRight} alt="Photo" style={_.image}/>
                        </section>
                    </section>
                    <section style={_.sectionSmallCard2}>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Felicia Nienow </h2>
                            <h1 style={_.title}>Ipsam voluptas vero qui repellat dolore</h1>
                            <h3 style={_.description}>
                                Et sit similique. Placeat inventore et vel.
                                Et non totam. Doloremque totam eligendi impedit numquam qui corrupti.
                            </h3>
                        </section>
                        <section style={_.contentImage}>
                            <img src={ImageRightPB} alt="Photo" style={_.image}/>
                        </section>
                    </section>
                </section>
            </div>
            <div style={_.container4}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard1}>
                        <section style={_.contentImage}>
                            <img src={ImageBig2} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Sydney Legros </h2>
                            <h1 style={_.title}>Possimus saepe et illum molestiae et quibusdam </h1>
                            <h3 style={_.description}>
                                Excepturi quod aliquid impedit earum consequatur eos. In quo fuga ad odio beatae
                            </h3>
                        </section>
                    </section>
                </section>
            </div>
            <div style={_.container5}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard1}>
                        <section style={_.contentImage}>
                            <img src={ImageLeftBlue} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Kelsi Monahan</h2>
                            <h1 style={_.title}>Qui occaecati vero et quibusdam non</h1>
                            <h3 style={_.description}>
                                Saepe quia culpa vero.
                                Velit numquam corporis nihil sint enim exercitationem. Rem nulla illum sint et id dolore voluptas
                            </h3>
                        </section>
                    </section>
                    <section style={_.sectionSmallCard2}>
                        <section style={_.contentImage}>
                            <img src={ImageLeftPB2} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Mrs. Alexanne Schneider </h2>
                            <h1 style={_.title}> Architecto quos rem unde quia accusantium</h1>
                            <h3 style={_.description}>
                                Voluptatum omnis et dolor architecto non totam aspernatur sapiente.
                                Et accusantium rem. Assumenda quia error
                            </h3>
                        </section>
                    </section>
                </section>
            </div>
            <div style={_.container6}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard2}>
                        <section style={_.contentImage}>
                            <img src={ImageBig3} alt="Photo" style={_.image}/>
                        </section>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Dagmar Ankunding </h2>
                            <h1 style={_.title}>Repellat aliquam quo sit qui praesentium ut aliquid</h1>
                            <h3 style={_.description}>
                                Ea ut et labore quidem non sit in quidem.
                                Provident est incidunt dignissimos enim qui consequatur numquam.
                            </h3>
                        </section>
                    </section>
                </section>
            </div>
            <div style={_.container7}>
                <section style={_.sectionSmallCard}>
                    <section style={_.sectionSmallCard1}>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Ibrahim Satterfield</h2>
                            <h1 style={_.title}>Deleniti et omnis aliquid consequuntur  </h1>
                            <h3 style={_.description}>
                                Voluptas quasi libero adipisci id.
                                Quis cum voluptas atque culpa vitae illo. Sunt ipsam alias occaecati dolorem maxime.
                            </h3>
                        </section>
                        <section style={_.contentImage}>
                            <img src={ImageLeftBlue} alt="Photo" style={_.image}/>
                        </section>
                    </section>
                    <section style={_.sectionSmallCard2}>
                        <section style={_.contentText}>
                            <h2 style={_.subtitle}>Felicia Nienow </h2>
                            <h1 style={_.title}>Ipsam voluptas vero qui repellat dolore </h1>
                            <h3 style={_.description}>
                                Saepe quia culpa vero. Velit numquam corporis nihil sint enim exercitationem.
                                Rem nulla illum sint et id dolore voluptas
                            </h3>
                        </section>
                        <section style={_.contentImage}>
                            <img src={ImageRightPB} alt="Photo" style={_.image}/>
                        </section>
                    </section>
                </section>
            </div>

        </>
    );
}
export default Home;
