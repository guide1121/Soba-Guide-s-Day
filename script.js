        // Array of questions and answers
        const questions = [
            {
                question: " เราเจอกันได้ไง ?",
                answers: ["ทินเดอร์", "ทินดู้",]
            },
            {
                question: "เจอกันครั้งแรกตอนไหน?",
                answers: ["ตอนไปตีแบด", "ตอนจะไปตีระฆัง",]
            },
            {
                question: "กินข้าวด้วยกันร้านอะไร?",
                answers: ["ราเมน", "ถังหู่ลู่",]
            },
            {
                question: "ติมที่เธอชอบที่สุด?",
                answers: ["ติมแดง", "ติมไผ่ทอง",]
            },
            {
                question: "อยากไปเที่ยวไหน?",
                answers: ["ทะเล", "ทะเลคือกันเพราะเธอกลัวหนอน ขึ้นเขาไมได้",]
            },
            {
                question: "เลือกได้อยากกินข้าวตอนไหน?",
                answers: ["เช้า", "ตี 3 ตี 4",]
            },
            {
                question: "และคำถามสุดท้าย",
                answers: ["??", "??",]
            }
            ,
            {
                question: "พร้อมอ๊ะยางงง",
                answers: ["พร้อม", "พร้อม",]
            },
            {
                question: "พร้อมยังน้าาาา",
                answers: ["พร้อม", "พร้อมมมมม",]
            },
            {
                question: "พร้อมยังเอ่ย",
                answers: ["เอาซักที", "จะถามยังคนเขียนก็เขินตามนะนิ",]
            },
            {
                question: "เป็นแฟนกันมั้ยคะ?",
                answers: ["เป็นค่ะ", "เป็นมั้งง",]
            }
            // Add more questions here
        ];

        let currentQuestionIndex = 0;

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                const question = document.querySelector('.question p');
                const answerButtons = document.querySelectorAll('.answers button');

                question.textContent = questions[currentQuestionIndex].question;

                answerButtons.forEach((button, index) => {
                    button.textContent = `${questions[currentQuestionIndex].answers[index]}`;
                });
            } else {
                document.querySelector('.quiz').innerHTML = '<h2>เย่ะ 💜 <a href="https://forms.gle/pTTfiLWVE2JvoFmB6">กดตรงนี้ต่อหน่อยยย</a></h2>';
            }
        }