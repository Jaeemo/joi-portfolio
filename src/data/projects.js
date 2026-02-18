export const rgbProjects = [
    {
        id: 'tooth-fairy',
        title: "TOOTH FAIRY",
        year: "2025",
        descriptionKo: `베개 아래에 천사가 살고 있다<span class="font-anton-sc">.</span>
잠을 잘 때<span class="font-anton-sc">,</span> 달콤한 천사의 속삭임에 잇몸이 녹아내린다<span class="font-anton-sc">.</span>
빠진 치아는 반드시 꼼꼼히 닦길<span class="font-anton-sc">.</span>
달콤한 천사가 기다리고 있다<span class="font-anton-sc">.</span>
<b>(</b>아마도 충치의 악마일지도 모르는<b>)</b>`,
        descriptionEn: `<b>Under the pillow lives an angel. 
When you sleep, your gums melt at the whisper of a sweet angel.
Be sure to brush every loose teeth thoroughly. 
A sweet angel awaits.
(Perhaps the devil of tooth decay.)</b>`,
        images: ['1.png', '2.png', '3.png'],
        layout: 'stacked-full'
    },
    {
        id: 'angel-heart',
        title: "ANGEL HEART / HEART SPINE",
        year: "2025",
        descriptionKo: `<b><span class="font-anton-sc">3D</span></b> 프린팅 키링<span class="font-anton-sc">,</span> 캔들 홀더`,
        descriptionEn: `<b>3D PRINTED KEYCHAIN, CANDLE HOLDER</b>`,
        // Custom layout with specific groupings
        imageLayout: [
            { type: 'full', images: ['4.png'] },           // Full width
            { type: 'overlap-alt', images: ['5.png', '6.png'] },  // 5 left-top, 6 right-bottom, overlaps with 4
            { type: 'full', images: ['7.png'] },           // Full width
            { type: 'overlap', images: ['8.png', '9.png'] },  // Overlapping candles

            // New Text Section
            {
                type: 'text-section',
                title: "EVERY ANGEL IS TERRIFYING *",
                subtitle: "VIRTUAL IDOL - ANGELITE",
                year: "2024",
                note: "* BY RAINER MARIA RILKE",
                descKo: `당신은 정말 ‘그’ 아이돌을 ‘좋아’합니까<b><span class="font-anton-sc">?</span></b>
네 명의 캐릭터로 구성된 <b><span class="font-anton-sc">ANGELITE</span></b>는 모두 하나의 디자이너의 움직임을 기반으로 만들어졌다<span class="font-anton-sc">.</span> 모션 트래킹 기술을 통해 디자이너의 몸짓을 실시간으로 반영하며<span class="font-anton-sc">,</span> 음성은 <b><span class="font-anton-sc">AI</span></b> 기반 변조를 통해 각기 다른 인격과 감정<span class="font-anton-sc">,</span> 말투를 갖춘 개별 캐릭터로 연기된다<span class="font-anton-sc">.</span> 겉보기에 이들은 실존하는 인물처럼 보이지만<span class="font-anton-sc">,</span> 실체는 오직 하나뿐이다<span class="font-anton-sc">.</span>
이 프로젝트는 우리가 ‘연예인’이라는 존재를 어떻게 소비하고<span class="font-anton-sc">,</span> 어떻게 믿고<span class="font-anton-sc">,</span> 어떻게 만들어내는지를 질문한다<span class="font-anton-sc">.</span> 우리는 그들이 보여주는 이미지를 곧 그들 자신이라고 생각한다<span class="font-anton-sc">.</span> 고도로 연출된 ‘완벽한 인간’을 받아들이며<span class="font-anton-sc">,</span> 그것을 쉽게 숭배하고 이상화한다<span class="font-anton-sc">.</span>
버츄얼 아이돌은 이 이미지 소비의 끝점에 서 있다<span class="font-anton-sc">.</span> 그들은 무엇이든 될 수 있고<span class="font-anton-sc">,</span> 어떤 모습이든 보여줄 수 있다<span class="font-anton-sc">.</span>
하지만 그들은 진짜 사람일까<b><span class="font-anton-sc">?</span></b>
우리가 생각하는 ‘사람다움’은 어디까지 허용될 수 있을까<b><span class="font-anton-sc">?</span></b>
<b><span class="font-anton-sc">ANGELITE</span></b>는 실재와 허구<span class="font-anton-sc">,</span> 자아와 이미지<span class="font-anton-sc">,</span> 감정과 알고리즘 사이의 긴장을 드러내는 프로젝트이다<span class="font-anton-sc">.</span>
우리는 여전히 그들을 모른다<span class="font-anton-sc">.</span>
그리고 어쩌면<span class="font-anton-sc">,</span> 우리가 좋아하는 것은 그들이 아니라 ‘우리가 믿고 싶은 무엇’일지도 모른다<span class="font-anton-sc">.</span>`,
                descEn: `<b>DO YOU TRULY "LIKE" THAT&nbsp;IDOL?</b>
<b>ANGELITE IS A VIRTUAL IDOL PROJECT COMPOSED OF FOUR CHARACTERS, ALL OF WHOM ARE BASED ON THE MOVEMENTS OF A SINGLE DESIGNER.</b> USING MOTION TRACKING TECHNOLOGY, THE ARTIST'S GESTURES ARE REFLECTED IN REAL TIME, WHILE EACH VOICE IS ALTERED THROUGH AI-DRIVEN VOICE MODULATION TO CREATE DISTINCT PERSONALITIES, EMOTIONS, AND SPEECH PATTERNS. ALTHOUGH THE CHARACTERS APPEAR TO BE INDIVIDUAL, FULLY-FORMED BEINGS, THEY ALL STEM FROM ONE BODY—ONE&nbsp;SELF.
<b>THIS PROJECT QUESTIONS HOW WE CONSUME, BELIEVE IN, AND CONSTRUCT THE IMAGE OF A "CELEBRITY."</b> WE OFTEN EQUATE WHAT IS SHOWN TO US WITH WHO THE PERSON TRULY IS. WE ACCEPT METICULOUSLY CRAFTED PORTRAYALS OF "PERFECT" HUMANS, AND IN DOING SO, WE IDOLIZE AND IDEALIZE THEM WITH&nbsp;EASE.
THE CONCEPT OF THE VIRTUAL IDOL REPRESENTS THE PINNACLE OF THIS IMAGE-BASED CONSUMPTION. THEY CAN BE ANYTHING, SHOW EVERYTHING, AND NEVER BREAK CHARACTER.
<b>BUT ARE THEY TRULY PEOPLE?</b>
<b>OR RATHER—HOW FAR ARE WE WILLING TO STRETCH THE DEFINITION OF WHAT FEELS&nbsp;HUMAN?</b>
<b>ANGELITE REVEALS THE TENSION BETWEEN AUTHENTICITY AND FABRICATION, BETWEEN SELFHOOD AND IMAGE, BETWEEN EMOTION AND ALGORITHM.</b>
<b>WE STILL DON'T TRULY KNOW THEM.</b>
<b>AND PERHAPS, WHAT WE LOVE IS NOT THEM AT ALL—BUT THE VERSION WE CHOOSE TO BELIEVE&nbsp;IN.</b>`
            },

            { type: 'full', images: ['10.png'] },          // Full width
            { type: 'full', images: ['11.png'] },          // Full width
            { type: 'full', images: ['12.png'] },          // Full width
            { type: 'full', images: ['13.png'] },          // Full width
            { type: 'pair-full', images: ['14-1.png', '14-2.png'] }  // 2-column NO crop
        ],
        layout: 'custom-grid'
    }
];

export const cmykProjects = [
    {
        id: 'wet-to-dry',
        title: "WET TO DRY",
        year: "2025",
        descKo: `한국에서 수건은 종종 기쁜 축하의 순간에 선물하는 전통적인 물건이다<span class="font-anton-sc">.</span> 생일<span class="font-anton-sc">,</span> 돌잔치<span class="font-anton-sc">,</span> 결혼식<span class="font-anton-sc">,</span> 기념일 등을 기념하는 자수 문구가 새겨진 수건은 흔하게 볼 수 있으며<span class="font-anton-sc">,</span> 일상의 리듬 속에 조용히 녹아 있는 작은 행복의 흔적이 된다<span class="font-anton-sc">.</span>
하지만 나는 이런 일방적인 ‘기쁨’의 서사에 의문을 갖게 되었다<span class="font-anton-sc">.</span> 수건은 기쁨을 기록하지만<span class="font-anton-sc">,</span> 같은 날에 일어난 슬픔은 어디에 남겨야 할까<b><span class="font-anton-sc">?</span></b> 누군가가 기뻐하는 바로 그 순간<span class="font-anton-sc">,</span> 또 다른 누군가는 슬픔을 겪고 있을지도 모른다<span class="font-anton-sc">.</span> 세상은 언제나 기쁨과 고통이 동시에 존재하는데<span class="font-anton-sc">,</span> 우리는 왜 오직 기쁨만을 기념하려고 할까<b><span class="font-anton-sc">?</span></b> 이 질문은 나로 하여금<span class="font-anton-sc">,</span> 기쁨과 같은 무게와 존엄으로 슬픔도 기억하는 방식을 고민하게 만들었다<span class="font-anton-sc">.</span>`,
        descEn: `<b>In Korea, the tradition of gifting towels is often associated with joyful celebrations. Towels embroidered with messages commemorating birthdays, a baby’s first birthday, weddings, or anniversaries are common. These towels serve as small, everyday reminders of happy moments, quietly woven into the rhythm of daily life.
However, I began to question this one-sided narrative of celebration. While these towels preserve joy, what about the sorrows that occur on the same days? For every moment someone is rejoicing, someone else may be grieving. The world holds both joy and pain simultaneously—so why do we only choose to commemorate happiness?
This reflection led me to create a way to remember sorrow with the same weight and dignity we afford joy.</b>`,
        imageLayout: [
            { type: 'full', images: ['1.png'] },
            { type: 'full', images: ['2.png'] },
            { type: 'pair-full', images: ['3-1.png', '3-2.png'] },
            { type: 'full', images: ['4.png'] },
            { type: 'full', images: ['5.png'] },
            { type: 'full', images: ['6.png'] },
            { type: 'full', images: ['7.png'] },
            { type: 'full', images: ['8.png'] },
            { type: 'full', images: ['9.png'] },
            { type: 'full', images: ['10.png'] },
            {
                type: 'text-section',
                title: "PAIN TONE",
                year: "2023",
                descKo: `나의 삶은 상처의 역사였다<span class="font-anton-sc">.</span>
일정 기간 동안 내 몸에 생긴 멍과 상처들을 사진으로 기록했다<span class="font-anton-sc">.</span> 자잘하고 무심하게 지나가는 상처들도<span class="font-anton-sc">,</span> 깊고 오래 남은 흔적들도 모두 포함되었다<span class="font-anton-sc">.</span> 그렇게 축적된 상처의 색을 추출해<span class="font-anton-sc">,</span> 하나의 컬러 차트로 정리했다<span class="font-anton-sc">.</span> 이 색상들은 <b><span class="font-anton-sc">Adobe</span></b> 프로그램에서 사용할 수 있는 컬러 스와치로 재가공되었고<span class="font-anton-sc">,</span> 나는 그 스와치를 기반으로 웹사이트<span class="font-anton-sc">,</span> 출판물<span class="font-anton-sc">,</span> 스티커 등 다양한 형식의 결과물을 제작했다<span class="font-anton-sc">.</span>
상처는 아프고 지나가는 것이지만<span class="font-anton-sc">,</span> 이 프로젝트는 그것들을 시각적 언어로 전환함으로써 내 삶의 흔적이자 기억으로 바라본다<span class="font-anton-sc">.</span> 누군가에게는 감춰야 할 흔적일 수 있는 상처가<span class="font-anton-sc">,</span> 여기서는 기록되고<span class="font-anton-sc">,</span> 이름 붙여지고<span class="font-anton-sc">,</span> 공유될 수 있는 색이 된다<span class="font-anton-sc">.</span>
하지만 나는 이런 일방적인 ‘기쁨’의 서사에 의문을 갖게 되었다<span class="font-anton-sc">.</span> 수건은 기쁨을 기록하지만<span class="font-anton-sc">,</span> 같은 날에 일어난 슬픔은 어디에 남겨야 할까<b><span class="font-anton-sc">?</span></b> 누군가가 기뻐하는 바로 그 순간<span class="font-anton-sc">,</span> 또 다른 누군가는 슬픔을 겪고 있을지도 모른다<span class="font-anton-sc">.</span> 세상은 언제나 기쁨과 고통이 동시에 존재하는데<span class="font-anton-sc">,</span> 우리는 왜 오직 기쁨만을 기념하려고 할까<b><span class="font-anton-sc">?</span></b> 이 질문은 나로 하여금<span class="font-anton-sc">,</span> 기쁨과 같은 무게와 존엄으로 슬픔도 기억하는 방식을 고민하게 만들었다<span class="font-anton-sc">.</span>`,
                descEn: `<b>My life has been a history of wounds.
Over a set period of time, I documented the bruises and injuries that appeared on my body—both the subtle marks that fade quickly and the deeper ones that lingered. From these images, I extracted the colors of each wound and compiled them into a unified color chart. These colors were then transformed into a usable Adobe color swatch, which became the basis for a series of works including
a website, printed publications, and stickers. While wounds are typically seen as something painful or to be hidden, this project seeks to reframe them as a visual
language—a personal archive and memory. 
Each injury, instead of being erased, is recorded, named, and made shareable in the form of color.</b>`
            },
            { type: 'full', images: ['11.png'] },
            { type: 'pair-full', images: ['12-1.png', '12-2.png'] },
            { type: 'trio', images: ['13-1.png', '13-2.png', '13-3.png'] },
            { type: 'paintone-layout', images: ['14.png', '15.png'] }
        ],
        layout: 'custom-grid'
    }
];

