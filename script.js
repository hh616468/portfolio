document.addEventListener("DOMContentLoaded", function () {
    // الحصول على معلمة ID من الرابط
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id'); // assuming 'id' is the parameter name

    if (productId) {
        // يمكنك هنا تحميل البيانات من خادم أو استخدام بيانات ثابتة
        const products = {
            "1": {
                title: "Project Stardust",
                image: "imge/Screenshot 2024-12-07 164627.png",
                videoTitle: "Watch Demo",
                videoLink: "https://youtu.be/ceSjR9q7FKY",
                description: "Project Stardust employs a range of techniques and technologies to deliver accurate and engaging movie recommendations. It utilizes natural language processing (NLP) algorithms to understand user preferences and input, ensuring a seamless and user-friendly experience. The chatbot incorporates various APIs to access extensive movie databases, gathering information on genres, ratings, and year of production and movie overview . and also paired with an amazing feature called 'guessing movie name'"
            },
            "2": {
                title: "Project 2",
                image: "imge/images.png",
                videoTitle: "Watch Video",
                videoLink: "#",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime numquam possimus repudiandae sint, voluptatum amet magni id at saepe deleniti sapiente labore libero suscipit repellat accusamus eveniet eos voluptatem?"
            },
            "3": {
                title: "Project SME",
                image: "imge/374206526_1252990858700938_4909842397923193968_n.jpg",
                videoTitle: "Read Post",
                videoLink: "https://www.facebook.com/share/p/17meE6fJvm/",
                description: "This innovative project amalgamates multiple categories, harnesses web scraping technology, and leverages AI-powered summarization. With its user-friendly interface and curated content, it empowers members to stay informed effortlessly. Project SME sets the stage for future advancements in content creation and content writing."
            },
            "4": {
                title: "Project Mocker",
                image: "imge/404889018_1286192912047399_1725547289621319451_n.jpg",
                videoTitle: "Read Post",
                videoLink: "https://www.facebook.com/share/p/1B8rkT8uPM/",
                description: "As ususal, it's for fun and experiencing project."
            },
            "5": {
                title: "Project 5",
                image: "imge/iStock-1291541351-2-1024x551.jpg",
                videoTitle: "Watch Video",
                videoLink: "#",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime numquam possimus repudiandae sint, voluptatum amet magni id at saepe deleniti sapiente labore libero suscipit repellat accusamus eveniet eos voluptatem?"
            },
            "6": {
                title: "Project 6",
                image: "imge/336679520_899925781278109_4308542020203667624_n.jpg",
                videoTitle: "Watch Video",
                videoLink: "#",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime numquam possimus repudiandae sint, voluptatum amet magni id at saepe deleniti sapiente labore libero suscipit repellat accusamus eveniet eos voluptatem?"
            },

            // أضف بيانات أخرى هنا
        };

        const product = products[productId];

        if (product) {
            document.getElementById("productTitle").innerText = product.title;
            document.getElementById("productImage").src = product.image;
            document.getElementById("videoTitle").innerText = product.videoTitle;
            document.getElementById("videoLink").href = product.videoLink;
            document.getElementById("productHeading").innerText = product.title;
            document.getElementById("productDescription").innerText = product.description;
        }
    }
});
