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
                    "NEARLY EVERY DAY": 3
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
                    "NEARLY EVERY DAY": 3
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
                    "NEARLY EVERY DAY": 3
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

        if (score >= 0 && score <= 4) {
            message = `<strong>Your GAD-7 Score: ${score}</strong><br>
            <strong>This indicates minimal anxiety symptoms.</strong><br>
            <strong>Severity: </strong>Low<br><br>
            <strong>Symptoms:</strong> Mild feelings of worry or nervousness that do not significantly impact daily life.<br>
            <strong>Risks:</strong> While minimal anxiety itself may not pose significant risks, it can be a precursor to more severe conditions if left untreated.<br>
            `;
            recommendation = `<br>
            <strong>Self-Care Tips:</strong><br>
            * <strong>Practice Mindfulness:</strong> Techniques like meditation and deep breathing can help you stay present and reduce stress.<br>
            * <strong>Prioritize Sleep:</strong> Aim for 7-9 hours of quality sleep each night to improve mood and cognitive function.<br>
            * <strong>Engage in Physical Activity:</strong> Regular exercise, like walking, yoga, or dancing, can boost your mood and reduce anxiety.<br>
            * <strong>Healthy Eating:</strong> A balanced diet can support your overall well-being.<br>
            * <strong>Connect with Others:</strong> Spend time with loved ones and build strong social connections.<br>
            `;
    
        } else if (score >= 5 && score <= 9) {
            message = `<strong>Your GAD-7 Score: ${score}</strong><br>
            <strong>This indicates mild anxiety symptoms.</strong><br>
            <strong>Severity: </strong>Mild<br><br>
            <strong>Symptoms:</strong> Increased worry or nervousness that may interfere with some daily activities.<br>
            <strong>Risks:</strong> Mild anxiety can lead to more pronounced anxiety disorders if not addressed.<br>
            `;
            recommendation = `<br>
            <strong>Self-Care Tips:</strong><br>
            * <strong>Practice Relaxation Techniques:</strong> Techniques like progressive muscle relaxation and deep breathing can help calm your nerves.<br>
            * <strong>Time Management:</strong> Break down tasks into smaller, manageable steps to reduce overwhelm.<br>
            * <strong>Limit Caffeine and Alcohol:</strong> These substances can exacerbate anxiety symptoms.<br>
            * <strong>Consider a Mental Health Professional:</strong> A therapist can provide guidance and tools to manage anxiety.<br>
            `;
    
        } else if (score >= 10 && score <= 14) {
            message = `<strong>Your GAD-7 Score: ${score}</strong><br>
            <strong>This indicates moderate anxiety symptoms.</strong><br>
            <strong>Severity: </strong>Moderate<br><br>
            <strong>Symptoms:</strong> Significant anxiety symptoms that interfere with daily activities, relationships, and overall well-being.<br>
            <strong>Risks:</strong> Moderate anxiety can lead to more severe mental health issues if not addressed.<br>
            `;
            recommendation = `<br>
            <strong>Seek Professional Help:</strong><br>
            * <strong>Therapy:</strong> A therapist can help you develop coping strategies and address underlying causes of anxiety.<br>
            * <strong>Medication:</strong> In some cases, medication may be helpful in managing symptoms, especially when combined with therapy.<br>
            * <strong>Support Groups:</strong> Connecting with others who understand your experiences can provide comfort and support.<br>
            `;
    
        } else if (score >= 15 && score <= 21) {
            message = `<strong>Your GAD-7 Score: ${score}</strong><br>
            <strong>This indicates severe anxiety symptoms.</strong><br>
            <strong>Severity: </strong>Severe<br><br>
            <strong>Symptoms:</strong> Severe anxiety symptoms that significantly impact daily functioning.<br>
            <strong>Risks:</strong> Severe anxiety can lead to debilitating conditions and may require immediate intervention.<br>
            `;
            recommendation = `<br>
            <strong>Immediate Action:</strong><br>
            * <strong>Seek Emergency Care:</strong> If you're experiencing thoughts of self-harm or suicide, please call a crisis hotline or go to the nearest emergency room.<br>
            * <strong>Therapy:</strong> A therapist can provide intensive treatment to address your anxiety.<br>
            * <strong>Medication:</strong> Medication may be necessary to manage severe symptoms, but it should be used in conjunction with therapy.<br>
            * <strong>Support Groups:</strong> Connecting with others can provide support and understanding.<br>
            `;
        }

    // Display the recommendation
    message += `<br><br>Recommendation: ${recommendation}<br><br><br><br>`;

    // Additional considerations for suicide risk
    if (score >= 10) { 
        message += " Please note that a score of 10 or higher indicates a potential for significant anxiety and may require professional assessment.";
    }


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
}z