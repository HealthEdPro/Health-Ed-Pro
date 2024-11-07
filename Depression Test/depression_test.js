// Get all test question containers
const testQuestions = document.querySelectorAll('.test-question');

// Get the submit button and the next button
const nextButton = document.querySelector('.submit-button[type="button"]'); // NEXT button
const submitButton = document.querySelector('.submit-button[type="submit"]'); // SUBMIT button

// Get the optional questions section
const optionalQuestionsSection = document.querySelector('.optional-questions');

// Get the results section
const resultsSection = document.querySelector('.results-section');
const resultsMessage = document.getElementById('results-message');

// Function to handle option button clicks
const handleOptionButtonClick = (button, optionButtons) => {
    // Deselect all buttons in this question
    optionButtons.forEach((btn) => {
        btn.classList.remove('selected');
        btn.style.pointerEvents = "auto"; // Enable pointer events for all buttons
    });

    // Select the clicked button
    button.classList.add('selected');
    button.style.pointerEvents = "none"; // Disable pointer events for the selected button
};

// Add event listeners to each test question's option buttons
document.querySelectorAll('.options').forEach((optionsContainer) => {
    const optionButtons = optionsContainer.querySelectorAll('.option-button');

    optionButtons.forEach((button) => {
        button.addEventListener('click', () => handleOptionButtonClick(button, optionButtons));
    });
});

// Add event listener to NEXT button
nextButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Calculate total score
    let totalScore = 0;
    testQuestions.forEach((question) => {
        const selectedButton = question.querySelector('.option-button.selected');
        if (selectedButton) {
            // Assign values to the buttons
            const values = {
                "NOT AT ALL": 0,
                "SEVERAL DAYS": 1,
                "MORE THAN HALF THE DAYS": 2,
                "NEARLY EVERY DAY": 3,
                "NOT DIFFICULT AT ALL": 0,
                "SOMEWHAT DIFFICULT": 1,
                "VERY DIFFICULT": 2,
                "EXTREMELY DIFFICULT": 3
            };
            totalScore += values[selectedButton.textContent];
        }
    });

    
    // Show the optional questions section
    optionalQuestionsSection.style.display = 'block';
    console.log('Total Score:', totalScore);

    // Automatically scroll to optional questions section
    optionalQuestionsSection.scrollIntoView({ behavior: 'smooth' });
});


// Get the skip button
const skipButton = document.getElementById('skip-button');

// Add event listener to skip button
skipButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Calculate total score
    let totalScore = 0;
    testQuestions.forEach((question) => {
        const selectedButton = question.querySelector('.option-button.selected');
        if (selectedButton) {
            const values = {
                "NOT AT ALL": 0,
                "SEVERAL DAYS": 1,
                "MORE THAN HALF THE DAYS": 2,
                "NEARLY EVERY DAY": 3,
                "NOT DIFFICULT AT ALL": 0,
                "SOMEWHAT DIFFICULT": 1,
                "VERY DIFFICULT": 2,
                "EXTREMELY DIFFICULT": 3
            };
            totalScore += values[selectedButton.textContent];
        }
    });

    // Show results section
    resultsSection.style.display = 'block';
    resultsMessage.innerHTML = getResultMessage(totalScore);

    // Automatically scroll to results section
    resultsSection.scrollIntoView({ behavior: 'smooth' });
});





// Add event listener to submit button
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Calculate total score again
    let totalScore = 0;
    testQuestions.forEach((question) => {
        const selectedButton = question.querySelector('.option-button.selected');
        if (selectedButton) {
            const values = {
                "NOT AT ALL": 0,
                "SEVERAL DAYS": 1,
                "MORE THAN HALF THE DAYS": 2,
                "NEARLY EVERY DAY": 3,
                "NOT DIFFICULT AT ALL": 0,
                "SOMEWHAT DIFFICULT": 1,
                "VERY DIFFICULT": 2,
                "EXTREMELY DIFFICULT": 3
            };
            totalScore += values[selectedButton.textContent];
        }
    });

    // Show results section
    resultsSection.style.display = 'block';
    resultsMessage.innerHTML = getResultMessage(totalScore);

    // Automatically scroll to results section
    resultsSection.scrollIntoView({ behavior: 'smooth' });
});




// Function to get result message based on score
function getResultMessage(score) {
    let message = "";
    let recommendation = "";

    if (score >= 0 && score <= 5) {
        message = `<strong>Your score is ${score}. This indicates minimal depressive symptoms.</strong><br>
        <strong>Severity: </strong>Low<br><br>
            * <strong>Symptoms:</strong>  Mild symptoms that may not significantly impact daily life.<br>
            * <strong>Risks:</strong>  While minimal depression itself may not pose significant risks, it can be a precursor to more severe conditions if left untreated.<br>
            
        `;
        recommendation = `<br>
            <strong>Self-Care Tips:</strong><br>
            * <strong>Prioritize Sleep:</strong> Aim for 7-9 hours of quality sleep each night.<br>
            * <strong>Healthy Diet:</strong> Eat a balanced diet rich in fruits, vegetables, and whole grains.<br>
            * <strong>Regular Exercise:</strong> Engage in physical activity like walking, jogging, or yoga.<br>
            * <strong>Mindfulness and Meditation:</strong> Practice mindfulness techniques to reduce stress and anxiety.<br>
            * <strong>Social Connection:</strong> Spend quality time with loved ones and build strong social relationships.<br>
            * <strong>Limit Screen Time:</strong> Reduce screen time, especially before bed.<br>
            * <strong>Hobbies:</strong> Engage in hobbies and activities you enjoy.<br>
            * <strong>Professional Help:</strong> Consider consulting with a mental health professional for regular check-ins and guidance.<br>

        `;
    } else if (score >= 6 && score <= 10) {
        message = `<strong>Your score is ${score}. This indicates mild depression.</strong><br>
            <strong>Severity:</strong> Moderate<br><br>
            * <strong>Symptoms:</strong> Moderate symptoms that can interfere with daily activities and relationships.<br>
            * <strong>Risks:</strong>
                * Increased risk of anxiety disorders<br>
                * Impaired cognitive function<br>
                * Difficulty concentrating<br>
                * Reduced productivity<br>
                * Social isolation<br>
        `;
        recommendation = `<br>
            <strong>Self-Care Tips:</strong><br>
            * <strong>Prioritize Self-Care:</strong> Make self-care a priority.<br>
            * <strong>Healthy Lifestyle:</strong> Maintain a healthy lifestyle with regular exercise, a balanced diet, and sufficient sleep.<br>
            * <strong>Mindfulness Techniques:</strong> Practice mindfulness techniques like meditation and deep breathing.<br>
            * <strong>Therapy:</strong> Consider seeking therapy to learn coping strategies and develop healthy coping mechanisms.<br>
            * <strong>Medication:</strong> Consult with a doctor to discuss medication options, if necessary.<br>
            * <strong>Social Support:</strong> Reach out to friends and family for support.<br>
            * <strong>Supportive Groups:</strong> Join support groups to connect with others who understand.<br>

        `;
    } else if (score >= 11 && score <= 15) {
        message = `<strong>Your score is ${score}. This indicates moderate depression.</strong><br>
            <strong>Severity:</strong> Severe<br><br>
            * <strong>Symptoms:</strong> Significant symptoms that can severely impair daily functioning.<br>
            * <strong>Risks:</strong><br>
                * Increased risk of substance abuse<br>
                * Suicidal thoughts or attempts<br>
                * Physical health problems<br>
                * Job loss<br>
                * Relationship breakdown<br>
        `;
        recommendation = `<br>
            <strong>Professional Help:</strong><br>
            * <strong>Therapy:</strong> Seek therapy to address underlying issues and develop coping strategies.<br>
            * <strong>Medication:</strong> Consult with a doctor to discuss medication options, if necessary.<br>
            * <strong>Regular Check-ins:</strong> Schedule regular check-ins with your therapist or doctor.<br>
            * <strong>Self-Care:</strong> Continue practicing self-care techniques, such as mindfulness, exercise, and healthy eating.<br>
            * <strong>Support Groups:</strong> Join support groups to connect with others who understand.<br>
            * <strong>Social Support:</strong> Maintain strong social connections with family and friends.<br>

        `;
    } else if (score >= 16 && score <= 20) {
        message = `<strong>Your score is ${score}. This indicates moderately severe depression.</strong><br>
            <strong>Severity:</strong> Very Severe<br><br>
            * <strong>Symptoms:</strong> Severe symptoms that can lead to significant impairment and may require hospitalization.<br>
            * <strong>Risks:</strong><br>
                * Increased risk of suicide<br>
                * Severe physical health problems<br>
                * Chronic illness<br>
                * Significant impairment in all areas of life<br>
        `;
        recommendation = `<br>
            <strong>Immediate Professional Help:</strong><br>
            * <strong>Therapist or Counselor:</strong> Seek immediate therapy to address underlying issues and develop coping strategies.<br>
            * <strong>Psychiatrist:</strong> Consult with a psychiatrist to discuss medication options.<br>
            * <strong>Crisis Hotline:</strong> Reach out to a crisis hotline if you're experiencing suicidal thoughts or urges.<br>
            * <strong>Hospitalization:</strong> In severe cases, hospitalization may be necessary.<br>
            * <strong>Self-Care:</strong> Prioritize self-care, even if it's difficult.<br>
            * <strong>Social Support:</strong> Lean on your support system of family and friends.<br>

        `;
    } else if (score >= 21 && score <= 30) {
        message = `<strong>Your score is ${score}. This indicates severe depression.</strong><br>
        <strong>Severity:</strong> Extremely Severe<br><br>
        * <strong>Symptoms:</strong> Extremely severe symptoms that can lead to significant impairment and may require hospitalization.<br>
        * <strong>Risks:</strong><br>
            * Increased risk of suicide<br>
            * Severe physical health problems<br>
            * Chronic illness<br>
            * Significant impairment in all areas of life<br>
    `;
        recommendation = `<br>
            <strong>Immediate Emergency Care:</strong><br>
            * <strong>Crisis Hotline:</strong> Call a crisis hotline immediately.<br>
            * <strong>Emergency Room:</strong> Go to the nearest emergency room.<br>
            * <strong>Hospitalization:</strong> You may need hospitalization for intensive treatment.<br>
            * <strong>Professional Help:</strong> Work closely with a mental health professional to develop a treatment plan.<br>
            * <strong>Medication:</strong> Consider medication to manage symptoms.<br>
            * <strong>Therapy:</strong> Engage in therapy to address underlying issues and develop coping strategies.<br>
            * <strong>Support System:</strong> Lean on your support system for emotional support.<br>
        
        `;
    }

    

    // Display the recommendation
    message += `<br><br>Recommendation: ${recommendation}<br><br><br>`;

    
    // Additional considerations for suicide risk
    if (score >= 3) { 
        message += " Please note that a score of 3 or higher on question 9 (Thoughts of death/self-harm ) indicates a potential suicide risk. This requires immediate attention.";
    }

        message += `<br><br><p class = "recommendation_p"><strong>if you have any concerns about your Depression please do not hesitate to see a Psychological Consultant.</strong></p>`;


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