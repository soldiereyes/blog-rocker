import React from "react";
import _ from "./PostsStyles";
import PhotoPost from "../../components/images/PhotoPost.svg";

const Posts = () => {
    return (

        <div style={_.container}>
            <section style={_.sectionImageTitle}>
                <div style={_.content}>
                    <section style={_.contentImage}>
                        <img src={PhotoPost} alt="Photo" style={_.image}></img>
                    </section>
                    <div style={_.contentText}>
                        <p style={_.data}>Jan 6, 2018</p>
                        <h2 style={_.subtitle}>Kelsi Monahan </h2>
                        <h1 style={_.cardTitle}>Qui occaecati vero et quibusdam non </h1>
                    </div>
                </div>
            </section>
            <div style={_.mainTextContainer}>
                <p style={_.mainText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ligula in nulla
                    vulputate
                    pharetra.
                    Proin condimentum, libero quis feugiat pharetra, ante arcu faucibus felis, vel elementum magna
                    felis
                    in
                    libero.
                    Aliquam id ultricies purus. Etiam at ullamcorper enim. Cras vel elit ac lorem condimentum
                    dignissim.
                    Ut rhoncus neque finibus erat congue, id tempus lacus hendrerit. Curabitur non faucibus diam.
                    Sed id ante id dolor euismod varius eu vel velit.

                    Maecenas id ligula quis enim blandit gravida a et lorem.
                    Vivamus eu turpis eu leo malesuada dictum non ac tortor.
                    Pellentesque volutpat mollis leo tincidunt sollicitudin. Suspendisse porta imperdiet sapien nec
                    euismod.
                    Quisque ac dictum sem. Cras in porttitor lacus, vitae convallis elit. Maecenas in fermentum
                    erat, a
                    rutrum nulla.

                    Mauris quis dolor sit amet metus mollis tempor eu quis turpis. Vestibulum vel eleifend magna,
                    eget
                    tempor nulla.
                    Donec bibendum mauris aliquam elit vulputate, id vestibulum lorem sodales. Nullam eget erat
                    mauris.
                    Etiam sit amet sollicitudin magna. Ut tortor nisi, mollis viverra tempus consequat, interdum non
                    mi.
                    Quisque bibendum, lacus sit amet rhoncus malesuada.
                </p>
            </div>
        </div>
    );
}
export default Posts;