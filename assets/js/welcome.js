
function fonctionDeBase() {
    window.onload = () => {


        /* THE STARTING PROMPT USERNAME & SLEEP CONDITIONS SAVING IN LOCAL STORAGE AND CONDITIONS ***************/
        /********************************************************************************************************/
        /********************************************************************************************************/
        // ? USERNAME IN LOCAL STORAGE
        if (localStorage.tonPseudo != null) {
            var tonPseudo = localStorage.tonPseudo;
        } else {
            var tonPseudo = prompt(`Salut! quel est ton prénom ? `);
            localStorage.tonPseudo = tonPseudo;
        }

        /*******************************************************************************************************/
        // ? SLEEP CONDITIONS IN SESSION STORAGE
        if (sessionStorage.bienrepose != null || sessionStorage.bienrepose != undefined) {
            var bienrepose = sessionStorage.bienrepose.value;
        } else {
            var bienrepose = prompt(`Tu t'es bien reposé ${tonPseudo} ?`);
            sessionStorage.bienrepose = bienrepose;
        }
        sessionStorage.bienrepose = bienrepose;

        /* THE 'DATA FOR STATISTICS FORM'S HTML ELEMENTS, LISTENERS, FUNCTIONS... ******************************/
        /*******************************************************************************************************/
        /*******************************************************************************************************/
        // ? HTML ELEMENTS
        let theDatesInput = document.getElementById('whatDate'); // date
        let validateTheDatesButton = document.getElementById('validateDate'); // date
        let sleepHoursInput = document.getElementById('sleepHours'); // sleep
        let validateSleepHoursButton = document.getElementById('validateSleepHours'); // sleep
        let sportSessionsInput = document.getElementById('howSporSession'); // sport
        let valideSportSessionButton = document.getElementById('validateSport'); // sport
        let javaScriptHoursInput = document.getElementById('howVanilla');
        let valideJavaScriptHoursButton = document.getElementById('validateVanilla');
        let pythonHoursInput = document.getElementById('howPython');
        let validatePythonButton = document.getElementById('validatePython');
        let AIHoursInput = document.getElementById('howAI');
        let validateAIHoursButton = document.getElementById('validateAI');
        let MathematicsHoursInput = document.getElementById('howMathematics');
        let validateMathsHoursButton = document.getElementById('validateMathematics');

        /**********************************************************************************************/
        // ? LISTENERS
        validateTheDatesButton.addEventListener('click', saveTrainingDaysStatistics);
        validateSleepHoursButton.addEventListener('click', saveSleepStatistics);
        valideSportSessionButton.addEventListener('click', saveSportStatistics);
        valideJavaScriptHoursButton.addEventListener('click', saveJavaScriptStatistics);
        validatePythonButton.addEventListener('click', savePythonStatistics);
        validateAIHoursButton.addEventListener('click', saveAIStatistics);
        validateMathsHoursButton.addEventListener('click', saveMathematicsStatistics);

        /**********************************************************************************************/
        // ? THE LISTENER'S FUNCTIONS
        // Sleep hours data 
        function saveSleepStatistics() {
            let numberSleepHours;
            if (localStorage.getItem('timeSlept') === null) {
                numberSleepHours = [];
            } else {
                numberSleepHours = JSON.parse(localStorage.getItem('timeSlept'));
            }
            numberSleepHours.push(sleepHoursInput.value);
            localStorage.setItem('timeSlept', JSON.stringify(numberSleepHours));
            sleepHoursInput.value = null;
        }
        let nbSleepHours = JSON.parse(localStorage.getItem('timeSlept'));

        /**********************************************************************************************/
        // Training days data  
        function saveTrainingDaysStatistics() {
            let DaysArray;
            if (localStorage.getItem('nbTrainingDays') === null) {
                DaysArray = [];
            } else {
                DaysArray = JSON.parse(localStorage.getItem('nbTrainingDays'));
            }
            DaysArray.push(theDatesInput.value);
            localStorage.setItem('nbTrainingDays', JSON.stringify(DaysArray));
            theDatesInput.value = '';
        }
        let nbTrainingDays = JSON.parse(localStorage.getItem('nbTrainingDays'));

        /**********************************************************************************************/
        // Sport sessions data 
        function saveSportStatistics() {
            let SportsArray;
            if (localStorage.getItem('nbSportSessions') === null) {
                SportsArray = [];
            } else {
                SportsArray = JSON.parse(localStorage.getItem('nbSportSessions'));
            }
            SportsArray.push(sportSessionsInput.value);
            localStorage.setItem('nbSportSessions', JSON.stringify(SportsArray))
            sportSessionsInput.value = '';
        }
        let nbSportSessions = JSON.parse(localStorage.getItem('nbSportSessions'));
        let totalSportSessionsDues = nbSportSessions.map(x => x = 2);

        /**********************************************************************************************/
        // Python data
        function savePythonStatistics() {
            let pythonArray;
            if (localStorage.getItem('nbPythonHours') === null) {
                pythonArray = [];
            } else {
                pythonArray = JSON.parse(localStorage.getItem('nbPythonHours'));
            }
            pythonArray.push(pythonHoursInput.value);
            localStorage.setItem('nbPythonHours', JSON.stringify(pythonArray));
            pythonHoursInput.value = null;
        }
        let nbPythonHours = JSON.parse(localStorage.getItem('nbPythonHours'));

        /**********************************************************************************************/
        // AI data
        function saveAIStatistics() {
            let AIArray;
            if (localStorage.getItem('nbAIHours') === null) {
                AIArray = [];
            } else {
                AIArray = JSON.parse(localStorage.getItem('nbAIHours'));
            }
            AIArray.push(AIHoursInput.value);
            localStorage.setItem('nbAIHours', JSON.stringify(AIArray));
            AIHoursInput.value = null;
        }
        let nbAIHours = JSON.parse(localStorage.getItem('nbAIHours'));

        /**********************************************************************************************/
        // Vanilla JS data
        function saveJavaScriptStatistics() {
            let javaScriptArray;
            if (localStorage.getItem('javaScriptHours') === null) {
                javaScriptArray = [];
            } else {
                javaScriptArray = JSON.parse(localStorage.getItem('javaScriptHours'));
            }
            javaScriptArray.push(javaScriptHoursInput.value);
            localStorage.setItem('javaScriptHours', JSON.stringify(javaScriptArray));
            javaScriptHoursInput.value = null;
        }
        let javaScriptHours = JSON.parse(localStorage.getItem('javaScriptHours'));

        /**********************************************************************************************/
        // JS mathematics data
        function saveMathematicsStatistics() {
            let mathematicsArray;
            if (localStorage.getItem('mathematicsHours') === null) {
                mathematicsArray = [];
            } else {
                mathematicsArray = JSON.parse(localStorage.getItem('mathematicsHours'));
            }
            mathematicsArray.push(MathematicsHoursInput.value);
            localStorage.setItem('mathematicsHours', JSON.stringify(mathematicsArray));
            MathematicsHoursInput.value = null;
        }
        let mathematicsHours = JSON.parse(localStorage.getItem('mathematicsHours'));
        /**********************************************************************************************/
        // ? WORKING WITH THE FORM'S DATA
        // ! Get the total of the numbers contained each of the arrays above
        let totalPythonHours = nbPythonHours.reduce((prev, current) => parseInt(prev) + parseInt(current));
        let totalAIHours = nbAIHours.reduce((prev, current) => parseInt(prev) + parseInt(current));
        let totalJavaScriptHours = javaScriptHours.reduce((prev, current) => parseInt(prev) + parseInt(current));
        let totalMathematicsHours = mathematicsHours.reduce((prev, current) => parseInt(prev) + parseInt(current));
        let totalSportSessions = nbSportSessions.reduce((prev, current) => parseInt(prev) + parseInt(current));
        // I used the ".reduce()" method to reduce my code instead of make long for loops
        // It returns the result of an addition of all the numbers contained inside my 'nbSportSessions' Array;

        // ! Declare the variables that will contain the values to display in the browser
        let displayNumberOfDays = ` ${nbTrainingDays.length - 1} `;
        let displaySportSessions = nbSportSessions.pop();
        let displaySleepHours = nbSleepHours.pop();
        let displayPythonHours = nbPythonHours.pop();
        let displayAIHours = nbAIHours.pop();
        let displayJavaScriptHours = javaScriptHours.pop();
        let displayMathematicsHours = mathematicsHours.pop();

        /* THE 'WELCOME DIV'S HTML ELEMENTS, CONDITIONS, LOOPS... **********************************************/
        /*******************************************************************************************************/
        /*******************************************************************************************************/
        // ? HTML ELEMENTS
        let dernier = document.querySelector('#jours-entrainement');
        let bienvenue = document.querySelector('#bienvenue');
        let effectifs = document.getElementById('effective');
        let python = document.getElementById('python');
        let AI = document.getElementById('AI');
        let JavaScript = document.getElementById('JavaScript');
        let mathematics = document.getElementById('mathematics');
        let sport = document.getElementById('sport');
        let sommeil = document.getElementById('sommeil');
        let totalBasesJavascript = document.getElementById('totalJsBasicsHours');
        let totalHoursExercices = document.getElementById('totalHoursExercices');
        let checkboxes = document.querySelectorAll('input[type=checkbox]');
        let saveButton = document.getElementById('save-button');
        let dropItem = document.querySelectorAll('a.dropdown-item');
        let stocked = document.getElementById('stocked');

        /*******************************************************************************************************/
        // ? PROMPTS CONDITIONS
        // Bien reposé oui / non
        if (bienrepose == 'oui') {
            (displayNumberOfDays > 10) ?
                alert(`Perfect ${tonPseudo}, you've worked for ${displayNumberOfDays} days congratulations !`) :
                (displayNumberOfDays > 20) ?
                    alert(`Perfect ${tonPseudo}, you've worked for ${displayNumberOfDays} days, Yes you got a real routine`) :
                    (displayNumberOfDays > 30) ?
                        alert(`Perfect ${tonPseudo}, you've worked for ${displayNumberOfDays} days, congratulations it's great !`) :
                        (displayNumberOfDays > 40) ?
                            alert(`Perfect ${tonPseudo}, you've worked for ${displayNumberOfDays} days ! Start teaching skills`) :
                            alert(`Perfect ${tonPseudo}, you've worked for ${displayNumberOfDays} days, good luck`);
        }
        else if (bienrepose == 'non') {
            (displayNumberOfDays > 10) ?
                alert(`Warning ${tonPseudo}, it's better to work with a well rested brain, you've worked for ${displayNumberOfDays} days ! keep it real, you got a real routine`) +
                alert(`you've worked for ${displayNumberOfDays} days`) :
                (displayNumberOfDays > 20) ?
                    alert(`Warning ${tonPseudo}, it's better to work with a well rested brain, you've worked for ${displayNumberOfDays} days ! congratulations it's great !`) +
                    alert(`you've worked for ${displayNumberOfDays} days`) :
                    (displayNumberOfDays > 30) ?
                        alert(`Warning ${tonPseudo}, it's better to work with a well rested brain, you've worked for ${displayNumberOfDays} days ! Congratulations Master !`) +
                        alert(`you've worked for ${displayNumberOfDays} days`) :
                        (displayNumberOfDays > 40) ?
                            alert(`Warning ${tonPseudo}, it's better to work with a well rested brain, you've worked for ${displayNumberOfDays} days ! Start teaching skills`) +
                            alert(`you've worked for ${displayNumberOfDays} days`) :
                            alert(`Warning ${tonPseudo}, it's better to work with a well rested brain, you've worked for ${displayNumberOfDays} days ! Good luck`);
        } else {
            console.log('Le repos est essentiel');
        }

        /*******************************************************************************************************/
        // ? DATA DISPLAYS AND CONDITIONS
        bienvenue.innerHTML = tonPseudo; // username
        dernier.innerHTML = `Your last workout day : ${Array.from(nbTrainingDays).pop()}`; // workout date
        effectifs.innerHTML = `Congratulations, ${tonPseudo} for your ${displayNumberOfDays} workout days`;
        // workout days.

        /*******************************************************************************************************/
        // Sleep hours conditions
        let sleepHoursConditions = () =>
            (displaySleepHours < 6) ? sommeil.innerHTML = `You slept for ${displaySleepHours} hours this night, take a nap today` :
                (displaySleepHours > 8) ? sommeil.innerHTML = `You slept for ${displaySleepHours} hours this night, it's too much !` :
                    sommeil.innerHTML = `You slept for ${displaySleepHours} hours this night it's perfect !`;
        sleepHoursConditions();
        /*******************************************************************************************************/
        // Sport sessions conditions
        let sportSessionsConditions = () =>
            (displaySportSessions < 1) ? sport.innerHTML = `${displaySportSessions} sport sessions yesterday ? Move up ass hole` :
                (displaySportSessions == 1) ? sport.innerHTML = `${displaySportSessions} sport session yesterday ? That's not sufficent !` :
                    (displaySportSessions == 2) ? sport.innerHTML = `${displaySportSessions} sport sessions yesterday ? Three is better !` :
                        (displaySportSessions > 3) ? sport.innerHTML = `${displaySportSessions} sport sessions yesterday !? Too much, 3 is Max` :
                            sport.innerHTML = `Congratulations, ${displaySportSessions} sport sessions yesterday keep it real`;
        sportSessionsConditions();
        /*******************************************************************************************************/
        // Python training hours conditions
        let pythonWorkHoursConditions = () =>
            (displayPythonHours >= 300) ? python.innerHTML = `Congratulations, ${displayPythonHours} hours of Python Workout, you are now a Master` :
                python.innerHTML = `${displayPythonHours} hours of Python Workout`;
        pythonWorkHoursConditions();
        /*******************************************************************************************************/
        // AI training hours conditions
        let AIWorkHoursConditions = () =>
            (displayAIHours >= 300) ? AI.innerHTML = `Congratulations, ${displayAIHours} hours of AI workout you are now a Master` :
                AI.innerHTML = `${displayAIHours} hours of AI Workout`;
        AIWorkHoursConditions();
        /*******************************************************************************************************/
        // JavaScript training hours conditions
        let javaScriptWorkHoursConditions = () =>
            (displayJavaScriptHours >= 300) ? JavaScript.innerHTML = `Congratulations, ${displayJavaScriptHours} hours of JavaScript bases workout you are now a Master` :
                JavaScript.innerHTML = `${displayJavaScriptHours} hours of JavaScript bases workout`;
        javaScriptWorkHoursConditions();
        /*******************************************************************************************************/
        // Mathematics training hours conditions
        let transverseSkillsWorkHoursConditions = () =>
            (displayMathematicsHours >= 300) ? mathematics.innerHTML = `Congratulations, ${displayMathematicsHours} hours of Mathematics workout.` :
                mathematics.innerHTML = `${displayMathematicsHours} hours of Mathematics workout.`;
        transverseSkillsWorkHoursConditions();

        /** My statistics div *********************************************************************************/
        /******************************************************************************************************/
        /******************************************************************************************************/

        // ! The statistics
        const ctx = document.getElementById('chart').getContext('2d');

        Chart.defaults.global.defaultFontColor = '#fff';

        const statsChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['PY', 'AI', 'JS', 'Sports', 'Days', 'Maths'],
                datasets: [{
                    label: '# of Votes',
                    data: [totalPythonHours, displayAIHours, displayJavaScriptHours, totalSportSessions, displayNumberOfDays, displayMathematicsHours],
                    backgroundColor: [
                        'green',
                        'royalblue',
                        'yellow',
                        'red',
                        '#ffffff',
                        '#d4af37'
                    ],
                    borderColor: [
                        'green',
                        'royalblue',
                        'yellow',
                        'red',
                        '#ffffff',
                        '#d4af37'
                    ],
                    height: '100',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 300
                        }
                    }],
                    fontColor: 'white'
                },
                aspectRatio: 1,
                title: {
                    display: true,
                    text: '300 unités (jours, heures, sessions)',
                    fontColor: 'white'
                },
                legend: {
                    display: false
                }
            },
        });
        /**THE JAVASCRIPT REPORTS DIV ***************************************************************************/
        /********************************************************************************************************/
        /********************************************************************************************************/

        /* Carousel JavaScript **********************************************************************************/

        let counter = 1;
        setInterval(function () {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        },
            10000
        );

        /* Sports Effectiveness *********************************************************************************/

        let dues = totalSportSessionsDues.reduce((previousValue, currentValue) => previousValue + currentValue);
        let sportEffectiveness = document.getElementById('sportCont');
        function displaySportSessionsEffectiveness(minNumber, maxNumber) {
            let average = Math.ceil(100 * minNumber / maxNumber);
            if (average < 50) {
                return `${minNumber} of ${maxNumber} sport sessions in ${displayNumberOfDays} days ? It's ${average} % of your dues. ${displaySportSessions} sessions yesterday`;
            } else if (average < 75) {
                return `${minNumber} of ${maxNumber} sport sessions in ${displayNumberOfDays} days ? It's ${average} % of your dues. ${displaySportSessions} sessions yesterday`;
            } else {
                return `Congratulations ${minNumber} of ${maxNumber} sport sessions in ${displayNumberOfDays} days ? It's ${average} % of your dues. ${displaySportSessions} sessions yesterday`;
            }
        };
        sportEffectiveness.innerText = (displaySportSessionsEffectiveness(totalSportSessions, dues));

        /* Work Days Effectiveness ******************************************************************************/
        let pythonLearningDiv = document.querySelector('#homework');
        let averagepythonLearningDiv = Math.ceil(totalPythonHours / displayNumberOfDays);
        pythonLearningDiv.innerHTML = ` You've worked on Python for ${totalPythonHours} hours in ${displayNumberOfDays} days. It nearly represents a ${averagepythonLearningDiv} hours per day workout routine`
        /* JS learning Effectiveness ****************************************************************************/
        let JavaScriptLearningDiv = document.querySelector('#javaScriptall');
        let averageJsLearningDiv = Math.ceil(totalJavaScriptHours / displayNumberOfDays);
        JavaScriptLearningDiv.innerHTML = `You,ve worked on JavaScript for ${totalJavaScriptHours} hours in ${displayNumberOfDays} days. It nearly represents a ${averageJsLearningDiv} hours per day workout routine`

        /* The transverse learning Effectiveness ****************************************************************************/
        let transverseLearningDiv = document.querySelector('#others');
        let averageTransverseLearningDiv = Math.ceil(totalMathematicsHours / displayNumberOfDays);
        transverseLearningDiv.innerHTML = `You,ve worked on Mathematics for ${totalMathematicsHours} hours in ${displayNumberOfDays} days. It represents a ${averageTransverseLearningDiv} hours per day workout routine`

        /**The JavaScript studies links ************************************************************************/
        /*******************************************************************************************************/
        /*******************************************************************************************************/


        // ! save the checkboxes choices in local storage (loop)
        function saveFinishedCoursesInLocalStorage() {
            saveButton.onclick = () => {
                for (i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked === true) {
                        localStorage.finishedCourses += `- ${checkboxes[i].previousElementSibling.innerText}`
                    }
                }
            };
        }
        saveFinishedCoursesInLocalStorage();

        function fromLocalStorageToHtml() {
            if (localStorage.finishedCourses !== "null") {
                stocked.innerHTML += `
                    <p>${localStorage.finishedCourses.split(/^-/)}</p>
                `;
            };
            //
            stocked.innerHTML = stocked.innerHTML
                .split(/\-[^\-|<]/)
                .join('</p> <p class="uncours">');
            // 
            let fifi = document.querySelectorAll('#stocked p');
            fifi[0].style.display = ('none');
            // 
            totalBasesJavascript.innerHTML = `${fifi.length - 1} / ${dropItem.length} cours terminés`;
            totalHoursExercices.innerHTML = `${fifi.length - 1} / ${dropItem.length} cours du lab terminés`;
        }
        fromLocalStorageToHtml();


        // ! view finished courses while push the "finished courses" button 
        // ! or hide them while clic the courses div
        function toggleViewFinishedCoursesOnClick() {
            let voirCours = document.getElementById('finishing')
            voirCours.onclick = () => {
                stocked.style.display = ('flex');
            }
            // 
            stocked.onclick = () => {
                stocked.classList.add('fall');
                stocked.addEventListener('transitionend', () => {
                    stocked.style.display = ('none');
                    window.location.reload();
                });
            }
        };
        toggleViewFinishedCoursesOnClick();
    };


}
fonctionDeBase();

