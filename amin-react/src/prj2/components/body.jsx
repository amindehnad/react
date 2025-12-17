import { useState } from "react"
import "../style.css"
import Card from "./card"
export default function Body(){
    const MyJornal=[
        {
          "id": 1,
          "img": {
            "src": "https://s.irangard.com/irangard/TourismObject/808/Media-8aa0faaf.jpg",
            "alt": "Shiraz, Takht-e Jamshid"
          },
          "location": "Iran, Shiraz",
          "title": "Shab-haye Mosko",
          "description": "Shiraz — the best of Iran"
        },
        {
          "id": 2,
          "img": {
            "src": "https://www.iranhotelonline.com/blog/wp-content/uploads/2023/05/spring-isfahan.jpg",
            "alt": "Isfahan, Naqsh-e Jahan Square"
          },
          "location": "Iran, Isfahan",
          "title": "Rokh-e Jahan",
          "description": "Isfahan — city of turquoise domes and bridges"
        },
        {
          "id": 3,
          "img": {
            "src": "https://cdn.tarhbama.com/1400/BigImage/2021/6/21/247/%D8%AA%D8%B5%D9%88%DB%8C%D8%B1%20%D8%A8%D8%A7%20%DA%A9%DB%8C%D9%81%DB%8C%D8%AA%20%D8%B4%D9%87%D8%B1%20%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE%DB%8C%20%DB%8C%D8%B2%D8%AF-small-1000-logo.jpg",
            "alt": "Yazd, Amir Chakhmaq Complex"
          },
          "location": "Iran, Yazd",
          "title": "Sahra-ye Khorshid",
          "description": "Yazd — the desert jewel and windcatcher city"
        },
        {
          "id": 4,
          "img": {
            "src": "https://farshbama.com/wp-content/uploads/2022/12/%D8%B4%D9%87%D8%B1-%D8%AA%D8%A8%D8%B1%DB%8C%D8%B2-%D8%B9%DA%A9%D8%B3.jpg",
            "alt": "Tabriz, Blue Mosque"
          },
          "location": "Iran, Tabriz",
          "title": "Aseman-e Aabi",
          "description": "Tabriz — city of art and ancient culture"
        },
        {
          "id": 5,
          "img": {
            "src": "https://www.iranhotelonline.com/blog/wp-content/uploads/2023/05/1683368424_296_%D8%AC%D8%A7%D9%87%D8%A7%DB%8C-%D8%AF%DB%8C%D8%AF%D9%86%DB%8C-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86-%DA%A9%D8%B1%D9%85%D8%A7%D9%86-%D8%A8%D8%A7-%D8%B9%DA%A9%D8%B3-%D9%88-%D8%A2%D8%AF%D8%B1%D8%B3.jpg",
            "alt": "Kerman, Lut Desert"
          },
          "location": "Iran, Kerman",
          "title": "Reg-e Sevom",
          "description": "Kerman — gateway to the endless Lut desert"
        },
        {
          "id": 6,
          "img": {
            "src": "https://www.jowhareh.com/images/Jowhareh/galleries/poster_aa474ccc-4980-4455-a1c2-0da450a76301.jpeg",
            "alt": "Mashhad, Imam Reza Shrine"
          },
          "location": "Iran, Mashhad",
          "title": "Noor-e Reza",
          "description": "Mashhad — city of spiritual warmth and hospitality"
        },
        {
          "id": 7,
          "img": {
            "src": "https://itavila.com/wp-content/uploads/shahrdari-rasht.jpg",
            "alt": "Rasht, Gilan Province Forest"
          },
          "location": "Iran, Rasht",
          "title": "Sabz-e Baran",
          "description": "Rasht — green and rainy heart of Caspian region"
        },
        {
          "id": 8,
          "img": {
            "src": "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/kish.jpg",
            "alt": "Kish Island, Persian Gulf"
          },
          "location": "Iran, Kish Island",
          "title": "Darya va Khorshid",
          "description": "Kish — island of sun, peace, and coral beaches"
        },
        {
          "id": 9,
          "img": {
            "src": "https://respina24.ir/mag/wp-content/uploads/2022/04/Tehran-sights-at-night.jpg",
            "alt": "Tehran, Milad Tower"
          },
          "location": "Iran, Tehran",
          "title": "Shahr-e Roshan",
          "description": "Tehran — dynamic capital with modern life and history"
        },
        {
          "id": 10,
          "img": {
            "src": "https://media.hamshahrionline.ir/d/2024/08/21/4/5053861.jpg?ts=1724261078000",
            "alt": "Hamedan, Avicenna Mausoleum"
          },
          "location": "Iran, Hamedan",
          "title": "Hekmat-e Kohan",
          "description": "Hamedan — birthplace of science and philosophy"
        },
        {
          "id": 11,
          "img": {
            "src": "https://www.iranhotelonline.com/blog/wp-content/uploads/2023/05/qeshm-attraction-7.jpg",
            "alt": "Qeshm Island, Hara Forest"
          },
          "location": "Iran, Qeshm Island",
          "title": "Hara-ye Zendegi",
          "description": "Qeshm — island of wonders and mangrove forests"
        },
        {
          "id": 12,
          "img": {
            "src": "https://hotelato.ir/gds/pic/articles/01840395201840-2926.jpg",
            "alt": "Kashan, Fin Garden"
          },
          "location": "Iran, Kashan",
          "title": "Bagh-e Asrar",
          "description": "Kashan — garden and historical architecture masterpiece"
        },
        {
          "id": 13,
          "img": {
            "src": "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/ahvaz-attracions-white-bridge.jpg",
            "alt": "Ahvaz, Karun River"
          },
          "location": "Iran, Ahvaz",
          "title": "Jaryan-e Zendeh",
          "description": "Ahvaz — city of bridges over the life‑giving Karun"
        },
        {
          "id": 14,
          "img": {
            "src": "https://navardino.ir/mag/wp-content/uploads/2024/11/%D8%AC%D8%A7%D9%87%D8%A7%DB%8C-%D8%AF%DB%8C%D8%AF%D9%86%DB%8C-%D8%B2%D8%A7%D9%87%D8%AF%D8%A7%D9%86.jpg",
            "alt": "Zanjan, Soltaniyeh Dome"
          },
          "location": "Iran, Zanjan",
          "title": "Gonbad-e Soltan",
          "description": "Zanjan — giant dome and timeless craftsmanship"
        },
        {
          "id": 15,
          "img": {
            "src": "https://amlakbandarabbas.ir/wp-content/uploads/2023/05/%D8%A8%D9%86%D8%AF%D8%B1-%D8%B9%D8%A8%D8%A7%D8%B3.webp",
            "alt": "Bandar Abbas, Persian Gulf Port"
          },
          "location": "Iran, Bandar Abbas",
          "title": "Nafas-e Darya",
          "description": "Bandar Abbas — port of culture, sun, and Persian Gulf life"
        }
      ]
      const journalEl = MyJornal.map((item)=>{
        return(
            <>
            <Card 
             title= {item.title} 
             img={item.img}
             description={item.description}
             location={item.location}
             />
             </>
        )
      })
    return(
        <>
        <main>
{journalEl}
        </main>
        </>
    )
}