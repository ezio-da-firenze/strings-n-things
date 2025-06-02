// import Dire from "../CategoryItem/CategoryItem.component";

import DirectoryItem from "../DirectoryItem/DirectoryItem.component";
import "./Directory.styles.scss";

const categories = [
    {
        id: 1,
        title: "Guitar",
        imageUrl:
            "https://i0.wp.com/acousticguitar.com/wp-content/uploads/2023/07/woman-playing-acoustic-guitar-and-singing-photo-elias-jonassonn.jpg?fit=750%2C500&ssl=1",
        route: "shop/guitar",
    },
    {
        id: 2,
        title: "Piano",
        imageUrl:
            "https://img.goodfon.com/wallpaper/big/a/d4/royal-klavishi-chernye-belye.webp",
        route: "shop/piano",
    },
    {
        id: 3,
        title: "Percussion",
        imageUrl:
            "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg",
        route: "shop/drumkits",
    },
    {
        id: 4,
        title: "Bass",
        imageUrl:
            "https://media.istockphoto.com/id/651209608/photo/close-up-photo-of-bass-guitar-player.jpg?s=612x612&w=0&k=20&c=IFJb9cCK_ODOrdYXd1_3Y_aoXwi0oimAAXfsmwen4Y4=",
        route: "shop/bass",
    },
    {
        id: 5,
        title: "Harmonica",
        imageUrl:
            "https://png.pngtree.com/thumb_back/fh260/background/20220806/pngtree-harmonica-harmonica-compose-tune-photo-image_1046010.jpg",
        route: "shop/harmonica",
    },
    {
        id: 6,
        title: "Brass",
        imageUrl:
            "http://shutterstock.com/image-photo/closeup-details-black-golden-alto-600nw-2283324613.jpg",
        route: "shop/brass",
    },
    {
        id: 7,
        title: "Flutes",
        imageUrl:
            "https://www.normans.co.uk/cdn/shop/articles/Flute_b11bec62-e214-45c7-8d9f-38e13e6124c4_600x600_crop_center.jpg?v=1620922239",
        route: "shop/flutes",
    },
    {
        id: 8,
        title: "Mics",
        imageUrl:
            "https://www.roadiemusic.com/blog/wp-content/uploads/2023/08/pexels-pixabay-164960.jpg",
        route: "shop/microphones",
    },
];

const Directory = () => {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <DirectoryItem category={category} key={category.id} />
            ))}
        </div>
    );
};

export default Directory;
