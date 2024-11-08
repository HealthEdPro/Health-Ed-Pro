// Get all test question containers
const testQuestions = document.querySelectorAll('.test-question');

// Get the buttons 
const nextButton = document.querySelector('.submit-button[type="button"]'); // NEXT button
const skipButton = document.getElementById('skip-button'); // SKIP button
const submitButton = document.querySelector('.submit-button[type="submit"]'); // SUBMIT button

// Get the sections
const optionalQuestionsSection = document.querySelector('.optional-questions');
const resultsSection = document.querySelector('.results-section');
const resultsMessage = document.getElementById('results-message');

// Function to handle option button clicks
const handleOptionButtonClick = (button, optionButtons) => {
    optionButtons.forEach((btn) => {
        btn.classList.remove('selected');
        btn.style.pointerEvents = "auto"; 
    });

    button.classList.add('selected');
    button.style.pointerEvents = "none"; 
};

// Add option button click listeners
document.querySelectorAll('.options').forEach((optionsContainer) => {
    const optionButtons = optionsContainer.querySelectorAll('.option-button');
    optionButtons.forEach((button) => {
        button.addEventListener('click', () => handleOptionButtonClick(button, optionButtons));
    });
});

//  --- Event Listeners for Navigation ---

// NEXT button
nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateTestQuestions()) {
        optionalQuestionsSection.style.display = 'block';
        optionalQuestionsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Please answer all the test questions."); 
    }
});

// SKIP button
skipButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (validateTestQuestions()) { 
        showResults();
    } else {
        alert("Please answer all the test questions before skipping.");
    }
});

// SUBMIT button 
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    showResults();
});

// --- Helper Functions ---

// Validate if all test questions are answered
function validateTestQuestions() {
    for (let i = 0; i < testQuestions.length; i++) {
        const selectedButton = testQuestions[i].querySelector('.option-button.selected');
        if (!selectedButton) {
            return false;
        }
    }
    return true;
}

// Calculate and display the results
function showResults() {
    let totalScore = calculateScore();
    resultsMessage.innerHTML = getAdhdResultMessage(totalScore);
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Calculate the total score
function calculateScore() {
    let totalScore = 0;
    testQuestions.forEach((question) => {
        const selectedButton = question.querySelector('.option-button.selected');
        if (selectedButton) {
            const values = {
                "NEVER": 0,
                "RARELY": 1,
                "SOMETIMES": 2,
                "OFTEN": 3,
                "VERY OFTEN": 4
            };
            totalScore += values[selectedButton.textContent];
        }
    });
    return totalScore;
}

// Generate personalized result message based on ADHD score
function getAdhdResultMessage(score) {
    let message = "";
    let recommendation = "";
    
    // Adjust these thresholds based on ADHD assessment guidelines
    if (score >= 0 && score <= 18) { 
        message = `<strong>Your score is ${score}/72. This indicates minimal ADHD symptoms.</strong><br>`;
        message += `
            ADHD (Attention-Deficit/Hyperactivity Disorder) is a neurodevelopmental disorder characterized by symptoms such as difficulty in maintaining focus and occasional forgetfulness. 
            At this level, symptoms may be mild and manageable with lifestyle adjustments.<br>
            Common symptoms include:<br>
            - Occasional forgetfulness<br>
            - Minor distractions<br>
            - Mild impulsivity<br>
        `;
        recommendation = `
            <br>
            * <strong>Focus on a Healthy Lifestyle:</strong> Maintain a balanced diet rich in omega-3 fatty acids, whole grains, and lean proteins. Regular exercise and sufficient sleep are crucial for optimal cognitive function.<br>
            * <strong>Time Management Techniques:</strong> Use planners, reminders, and break tasks into smaller, manageable steps to stay organized.<br>
            * <strong>Stress Management:</strong> Practice mindfulness meditation, yoga, or deep breathing exercises to enhance focus and reduce anxiety.<br>
            *  * <strong>Therapy:</strong>Cognitive Behavioral Therapy (CBT): More focused on developing coping strategies for managing symptoms and improving organizational skills.<br>
            Life Coaching: A life coach can help set personal goals and develop strategies for maintaining focus and managing daily tasks.<br>
            * <strong>Seek Professional Evaluation:</strong> If symptoms persist or worsen, consider consulting a healthcare professional for a comprehensive assessment.
        `; 
    } else if (score >= 19 && score <= 30) {
        message = `<strong>Your score is ${score}/72. This indicates mild ADHD symptoms.</strong><br>`;
        message += `
            At this level, individuals may experience more noticeable difficulties with attention and organization. Symptoms can interfere with daily activities but are still manageable.<br>
            Common symptoms include:<br>
            - Difficulty organizing tasks<br>
            - Frequent distractions<br>
            - Mild hyperactivity or restlessness<br>
        `;
        recommendation = `
            <br>
            * <strong>Structured Environment:</strong> Create a structured environment at home and work to minimize distractions. Designate specific areas for tasks.<br>
            * <strong>Behavioral Strategies:</strong> Implement behavioral strategies like reward systems for completing tasks to improve focus and motivation.<br>
            * <strong>Professional Support:</strong> Consider seeking support from a mental health professional for coping strategies and guidance.<br>
            * <strong>Peer Support:</strong> Engage with support groups or communities for individuals with ADHD to share experiences and strategies.
        `;
    } else if (score >= 31 && score <= 45) {
        message = `<strong>Your score is ${score}/72. This indicates moderate ADHD symptoms.</strong><br>`;
        message += `
            Individuals with moderate ADHD may struggle significantly with focus, organization, and impulse control, impacting their daily life.<br>
            Common symptoms include:<br>
            - Frequent mistakes in work or school<br>
            - Difficulty maintaining attention in conversations<br>
            - Impulsivity leading to hasty decisions<br>
        `;
        recommendation = `
            <br>
            * <strong>Therapeutic Interventions:</strong> Explore therapy options such as cognitive-behavioral therapy (CBT) to develop coping mechanisms and improve organizational skills.<br>
            * <strong>Medication Consultation:</strong> Discuss medication options with a healthcare provider to manage symptoms effectively, considering both stimulants and non-stimulants.<br>
            * <strong>Skill Development:</strong> Focus on developing organizational and time management skills through workshops or coaching.<br>
            * <strong>Regular Check-ins:</strong> Schedule regular check-ins with a mental health professional to monitor progress and adjust treatment plans as needed.
        `;
    } else if (score >= 46 && score <= 60) {
        message = `<strong>Your score is ${score}/72. This indicates severe ADHD symptoms.</strong><br>`;
        message += `
            Severe ADHD symptoms can significantly impair daily functioning and relationships. Individuals may require more structured support.<br>
            Common symptoms include:<br>
            - Inability to sit still<br>
            - Frequent interruptions in conversations<br>
            - Difficulty completing tasks or following through on commitments<br>
        `;
        recommendation = `
            <br>
            * <strong>Comprehensive Evaluation:</strong> Seek a comprehensive evaluation from a mental health professional to explore treatment options tailored to your needs.<br>
            * <strong>Intensive Support:</strong> Consider intensive support programs or therapy to address significant challenges, including family therapy.<br>
            * <strong>Family Involvement:</strong> Involve family members in the treatment process to create a supportive environment and improve communication.<br>
            * <strong>Educational Support:</strong> Explore educational accommodations or support services if applicable, such as individualized education plans (IEPs) or tutoring.<br>
        `;
    } else if (score > 60) { // New condition for score above 60
        message = `<strong>Your score is ${score}/72. This indicates very severe ADHD symptoms.</strong><br>`;
        message += `
            Very severe ADHD symptoms can lead to significant challenges in multiple areas of life, including work, relationships, and daily functioning. Immediate intervention is crucial.<br>
            Common symptoms include:<br>
            - Extreme difficulty in maintaining focus<br>
            - Severe impulsivity leading to risky behaviors<br>
            - Inability to manage daily tasks or responsibilities<br>
        `;
        recommendation = `
            <br>
            * <strong>Immediate Professional Help:</strong> It is highly recommended to seek immediate help from a qualified mental health professional who specializes in ADHD.<br>
            * <strong>Intensive Therapy:</strong> Explore intensive therapy options such as Dialectical Behavior Therapy (DBT) or other specialized treatments tailored to severe ADHD.<br>
            * <strong>Support Groups:</strong> Join support groups for individuals with severe ADHD symptoms to share experiences, coping strategies, and resources.<br>
            * <strong>Medication Management:</strong> Discuss advanced medication management strategies with your healthcare provider, considering both short-term and long-term treatment plans.<br>
            * <strong>Family and Community Support:</strong> Involve your family and community in your treatment plan for a comprehensive support system, including educational workshops for family members.<br>
        `;
    }

    message += `<br><strong>Recommendations:</strong>${recommendation}<br>`;



    message += `<br><br><p class = "recommendation_p"><strong>if you have any concerns about your ADHD (Attention-Deficit/Hyperactivity Disorder) please do not hesitate to see a Psychological Consultant.</strong></p>`;

    return message;

}


//    this is for  household income 

function updateIncomeOptions() {
    const nationalitySelect = document.getElementById('nationality');
    const incomeSelect = document.getElementById('householdIncome');
    const incomeDiv = document.getElementById('incomeDiv');
    incomeSelect.innerHTML = '<option value="" disabled selected>Select your household income</option>'; // Reset options

    if (nationalitySelect.value === 'Indian') {
        // Income options in Rupees
        const incomeOptions = [
            'Less than ₹25,000',
            '₹25,001 - ₹50,000',
            '₹50,001 - ₹75,000',
            '₹75,001 - ₹100,000',
            '₹100,001 - ₹150,000',
            '₹150,001 - ₹200,000',
            '₹200,001 - ₹250,000',
            'Over ₹250,000'
        ];
        incomeOptions.forEach(option => {
            incomeSelect.innerHTML += `<option value="${option}">${option}</option>`;
        });
        incomeDiv.style.display = 'block';
    } else if (nationalitySelect.value === 'Other') {
        // Income options in Dollars
        const incomeOptions = [
            'Less than $25,000',
            '$25,001 - $50,000',
            '$50,001 - $75,000',
            '$75,001 - $100,000',
            '$100,001 - $150,000',
            '$150,001 - $200,000',
            '$200,001 - $250,000',
            'Over $250,000'
        ];
        incomeOptions.forEach(option => {
            incomeSelect.innerHTML += `<option value="${option}">${option}</option>`;
        });
        incomeDiv.style.display = 'block';
    } else {
        incomeDiv.style.display = 'none'; // Hide income div if no nationality is selected
    }
}