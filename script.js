const database = {
    temple: [
        { name: "Kedarnath Dham", loc: "Rudraprayag", img: "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_1736325021Kedarnath_Temple.jpg", desc: "Set against the backdrop of snow-capped peaks, this is the most remote of the four Chota Char Dham sites.", history: "According to myth, the Pandavas built the temple to please Lord Shiva.", route: "https://www.google.com/maps/search/Kedarnath+Temple" },
        { name: "Badrinath Dham", loc: "Chamoli", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJm-G4DOGbn--s-ktyEszsckOWqeKZ3ielg&s", desc: "Badrinath is a sacred Hindu town and temple dedicated to Lord Vishnu, located in Uttarakhand’s Chamoli district at 3,300 meters in the Garhwal Himalayas", history: "Badrinath Temple, located in Uttarakhand's Garhwal Himalayas, is a major 8th-century Hindu pilgrimage site established by Adi Shankaracharya", route: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwNrLIrTRg9OJMSkwpysxLLMkAAEWVBsM&q=badrinath&rlz=1C1CHNY_enIN1051IN1051&oq=&gs_lcrp=EgZjaHJvbWUqCQgCEC4YJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCEC4YJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gIyFQgIEC4YQxi0AhjqAhiABBiKBRjnBjIXCAkQABhCGEMYtAIY6gIYgAQYigUY5wYyFwgKEAAYQhhDGLQCGOoCGIAEGIoFGOcGMhcICxAAGEIYQxi0AhjqAhiABBiKBRjnBtIBCTIxNTlqMGoxNagCDLACAfEFpGnIu3mXG0c&sourceid=chrome&ie=UTF-8https://share.google/T3APYiaA9oJ3wkPJT" },
        { name: "Gangotri", loc: "Uttarkashi", img: "https://www.chardham-pilgrimage-tour.com/assets/images/gangotri.webp", desc: "Gangotri, located in Uttarakhand, India, is a highly sacred Hindu pilgrimage site and a key stop on the Char Dham Yatra.", history: "Gangotri, located in Uttarakhand's Garhwal Himalayas at 3,200 meters, is a premier Hindu pilgrimage site. The present temple, dedicated to Goddess Ganga, was built in the early 18th century by Nepalese Gorkha General Amar Singh Thapa", route: "https://maps.app.goo.gl/Qpiaf18x4GafQBmw7" },
        { name: "Yamunotri", loc: "Uttarkashi", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXopGTbBdB6mbjlXSH-WggYROfg_Y5RQYufQ&s", desc: "Yamunotri, located in Uttarakhand's Uttarkashi district at 3,293 meters in the Garhwal Himalayas, is the sacred source of the Yamuna River and the first stop on the Char Dham Yatra.", history: "Yamunotri, the westernmost shrine in the Garhwal Himalayas and the source of the Yamuna River, is dedicated to Goddess Yamuna. The current temple, built in 1839 by King Sudarshan Shah of Tehri and later rebuilt by Maharani Guleria of Jaipur in the 19th century, sits at 3,291m.", route: "https://maps.app.goo.gl/LxXALEnJnEMH3Xu99" },

        { name: "Tungnath Temple", loc: "Chopta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bn5n0Fdjj00ueP12sQY1KN_6WajZiXqoGQ&s", desc: "Highest Shiva temple in the world. A short but steep 4km trek leads you to this ancient stone marvel.", history: "It is the second of the Panch Kedar temples where Lord Shiva's arms appeared.", route: "https://www.google.com/maps/search/Tungnath+Temple" },
        { name: "Jageshwar Dham", loc: "Almora", img: "https://cdn.triptotemples.com/blogs/65bde5999cc6d325323cfcdb-1-(6).png?width=405&height=270&mode=crop&crop=smart", desc: "A cluster of 124 ancient temples surrounded by towering Deodar trees.", history: "Built during the 9th to 13th centuries, these temples showcase the finest Katyuri architecture.", route: "https://www.google.com/maps/search/Jageshwar+Dham" },
        { name: "Surkanda Devi", loc: "Tehri Garhwal", img: "https://temple.yatradham.org/public/Product/temple/temple_csk3j5wh_202506171749290.webp", desc: "A Shakti Peeth that offers 360-degree views of the Garhwal Himalayas.", history: "One of the places where the remains of Goddess Sati's body fell.", route: "https://www.google.com/maps/search/Surkanda+Devi+Temple" },
        { name: "Bagnath Temple", loc: "Bageshwar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8kSjV4zmfdh4528YljUmvJ9LIxp63VpKgw&s", desc: "Situated at the holy confluence of Sarju and Gomti rivers, famous for its massive Shiva idol.", history: "Named after 'Bagh' (Tiger), it is where Sage Markandeya was blessed by Shiva in tiger form.", route: "https://www.google.com/maps/search/Bagnath+Temple" }
    ],
    gem: [
        { name: "Chandrashila Peak", loc: "Above Tungnath", img: "https://www.hotelbhanupalace.com/rudraprayag/wp-content/uploads/2024/06/chandrashila-peak-5.jpg", desc: "The summit above Tungnath. It offers views of Nanda Devi, Trishul, and Chaukhamba peaks.", history: "Where Lord Rama meditated after the battle of Lanka.", route: "https://www.google.com/maps/search/Chandrashila+Peak" },
        { name: "Mana Village", loc: "Last Village", img: "https://images.moneycontrol.com/static-mcnews/2025/05/20250507103531_8.jpg?impolicy=website&width=1280&height=720", desc: "The last Indian village before the border. Experience ancient culture and the Saraswati river origin.", history: "Mentioned in Mahabharata as the path the Pandavas took to heaven.", route: "https://www.google.com/maps/search/Mana+Village" },
        { name: "Munsiyari Zero Point", loc: "Pithoragarh", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB32Ih7YpLF4JlG6ztX1CtSmZ_pfQ5t884SA&s", desc: "A trekker's paradise offering the closest view of the Panchachuli peaks.", history: "Known as the Gateway to the Johar Valley.", route: "https://www.google.com/maps/search/Munsiyari+Zero+Point" },
        { name: "Auli Artificial Lake", loc: "Chamoli", img: "https://t.eucdn.in/tourism/lg/auli-2080726.webp", desc: "World's highest man-made lake, created for the international skiing slopes.", history: "A modern engineering feat in the heart of the mountains.", route: "https://www.google.com/maps/search/Auli+Lake" }
    ],
    festival: [
        { name: "Phool Dei", loc: "Garhwal & Kumaon", img: "https://data1.ibtimes.co.in/en/full/758715/phool-dei-2021.jpg?w=867https://images.unsplash.com/photo-1514222139-b576bb553ed3?auto=format&fit=crop&w=600", desc: "A flower festival celebrating the first day of the harvest month.", history: "Celebrates the bond between nature and humans.", route: "https://www.google.com/search?q=Phool+Dei+Festival" },
        { name: "Nanda Devi Raj Jat Yatra", loc: "Chamoli", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fMo7PCcyeANjG_sBxdgiDLpnwmpV_VCq-A&s", desc: "The Nanda Devi Raj Jat Yatra is a sacred 3-week, 12-yearly pilgrimage in Uttarakhand (often called the Himalayan Mahakumbh), covering ~280 km to honor Goddess Nanda Devi.", history: "Nanda Devi Raj Jat Yatra Uttarakhand 2026 – History, Route ...The Nanda Devi Raj Jat Yatra is a sacred 12-yearly pilgrimage in Uttarakhand, India, honoring Goddess Nanda, believed to be the daughter of the Himalayas returning to her husband, Lord Shiva. Initiated by the Chand kings to foster local culture, the arduous 280km procession starts from Nauti village, featuring a sacred four-horned sheep (Chausingya Khadu). ", route: "https://www.google.com/search?sca_esv=0e50515861f97790&rlz=1C1CHNY_enIN1051IN1051&sxsrf=ANbL-n7VDN6q_38fj9q804tF9Iv283KL3A:1775531826538&q=Nanda+Devi+Raj+Jat+Yatra&source=lnms&fbs=ADc_l-ZMtfrlQ0SU6L2D0-D344flb1w3kYSjpTQAzDDCX0uQO7PEu0D4gIIYbJbqb0Ay7tqAoAgx4LJ5RIXrMsai-qYMLDMUGfrgZs8Z7TtKrw8tI_r2Nwe0v5NdRgrYoDgMhaL_KBXkjP_o_qCz9AaV85V4d6hpz-cfm6C49MAyBsmNwuCtp2qdbzN-JdLzgSs8fBnjjUm-EGHXDBnh3uOlT9AChLhcww&sa=X&ved=2ahUKEwiZnLu-49qTAxXcUGwGHVhcOzYQ0pQJegQICxAB&biw=1455&bih=703&dpr=1.1" },
        { name: "Igas", loc: "Garhwal & Kumaon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpQDJa76ia8dffqR0zFmGksDVvFdSTjjd6Tw&s", desc: "Igaas (or Egaas) is a folk festival also known as Budhi Diwali, celebrated 11 days after the main Diwali festival on the day of Kartik Shukla Ekadashi.", history: "The festival in itself suggests that it is the diversity of culture and traditions which shapes our country and its people. According to a popular Garhwali legend, the origin of Igaas is attributed to the warrior Madhav Singh Bhandari, who served as the commander-in-chief under 17th century Garhwal ruler Mahipati Shah.", route: "https://www.google.com/search?q=igas+%28or+egaas%29&rlz=1C1CHNY_enIN1051IN1051&biw=1455&bih=703&sca_esv=816830971752f1d5&sxsrf=ANbL-n4dtvJ4Sz9JcKMFEIm01keBlEuHDA%3A1775532413600&ei=fXnUaYm0JNKQseMP2fGW0Ag&ved=0ahUKEwjJ5rLW5dqTAxVSSGwGHdm4BYoQ4dUDCBE&uact=5&oq=igas+%28or+egaas%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiD2lnYXMgKG9yIGVnYWFzKTIEECMYJzIEECMYJzIKECMY8AUYJxjJAjIGEAAYDRgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyBRAAGO8FMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIESPsHULwBWLwBcAF4AZABAJgBsAGgAbABqgEDMC4xuAEDyAEA-AEBmAICoALFAcICChAAGLADGNYEGEeYAwCIBgGQBgiSBwMxLjGgB9UMsgcDMC4xuAe9AcIHBTItMS4xyAcQgAgA&sclient=gws-wiz-serp" },

    ],
    food: [
        { name: "Bal Mithai", loc: "Almora", img: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/5ce3f34c-9868-4dbf-9fd2-a5b2ba4b9764/bal+mithai1.jpg", desc: "The famous brown chocolate-like fudge coated with white sugar balls.", history: "The signature sweet of the Kumaon region.", route: "https://www.google.com/search?q=Almora+Bal+Mithai" },
        { name: "Singori", loc: "Almora", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4Q3qrW34EePD6MKyNNiEJsTRXMcAInKwPQ&s", desc: "A traditional sweet from the Kumaon region wrapped in Malu leaves.", history: "Known for its unique flavor and packaging in forest leaves.", route: "https://www.google.com/search?q=singori+sweet" },
        { name: "Jhangora ki Kheer", loc: "Garhwal & Kumaon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRut4zFlsVZG45H4y3gaFmShW7M6W0CdbLXQg&s", desc: "Jhangore ki Kheer Recipe: How to Make Jhangore ki Kheer ...Jhangora ki Kheer is a traditional and nutritious dessert from Uttarakhand, made by cooking jhangora (barnyard millet) with milk, sugar/jaggery, and cardamom.", history: "Jhangora ki Kheer is a traditional and nutritious dessert from Uttarakhand, made withbarnyard millet(Jhangora)", route: "https://www.google.com/search?q=jhangora+ki+kheer&rlz=1C1CHNY_enIN1051IN1051&biw=1455&bih=703&sca_esv=816830971752f1d5&sxsrf=ANbL-n6ZDl7irhCmS_GEYQ0tzDFaw66n9Q%3A1775532738100&ei=wnrUafDiBZieseMP-IjjiQ8&ved=0ahUKEwjwy5Dx5tqTAxUYT2wGHXjEOPEQ4dUDCBE&uact=5&oq=jhangora+ki+kheer&gs_lp=Egxnd3Mtd2l6LXNlcnAiEWpoYW5nb3JhIGtpIGtoZWVyMgQQIxgnMg0QIxjwBRiABBgnGIoFMgQQIxgnMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLAUidDFC-BVi-BXABeAGQAQCYAZ4BoAGeAaoBAzAuMbgBA8gBAPgBAZgCAqACrwHCAgoQABiwAxjWBBhHmAMAiAYBkAYIkgcDMS4xoAfOCbIHAzAuMbgHqAHCBwUyLTEuMcgHDoAIAA&sclient=gws-wiz-serp" },

    ],
};

function openCategory(cat) {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('category-view').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    document.getElementById('categoryTitle').innerText = cat.toUpperCase() + 'S';
    
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = database[cat].map((item, i) => `
        <div class="place-card" onclick="showInfo('${cat}', ${i})">
            <img src="${item.img}" alt="${item.name}">
            <div class="place-content">
                <h3>${item.name}</h3>
                <p>📍 ${item.loc}</p>
            </div>
        </div>
    `).join('');
    window.scrollTo(0,0);
}

function showHome() {
    document.getElementById('home-view').style.display = 'flex';
    document.getElementById('category-view').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
}

function showInfo(cat, index) {
    const place = database[cat][index];
    document.getElementById('modalContent').innerHTML = `
        <img src="${place.img}" class="modal-image">
        <div class="modal-body">
            <h2 style="font-family:'Cinzel'; color:var(--gold); font-size: 2.8rem;">${place.name}</h2>
            <p style="margin: 20px 0; color:var(--gold); font-size: 1.2rem; font-weight:600;">📍 ${place.loc}</p>
            <p style="font-size: 1.1rem; line-height: 2; opacity:0.9;">${place.desc}</p>
            <h3 style="margin-top: 40px; color:var(--gold); border-bottom: 1px solid rgba(212,175,55,0.2); padding-bottom: 10px;">Deep History</h3>
            <p style="opacity: 0.8; margin-top: 15px; line-height: 1.8;">${place.history}</p>
            <a href="${place.route}" target="_blank" class="route-btn">🗺️ NAVIGATE TO DESTINATION</a>
        </div>
    `;
    document.getElementById('infoModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}