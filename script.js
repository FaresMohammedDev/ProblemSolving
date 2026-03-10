const subjectsData = [
    {
        id: "arabic",
        title: "اللغة العربية",
        icon: "fa-book",
        lang: "ar",
        dir: "rtl",
        sections: [
            {
                title: "أولاً: القراءة",
                lessons: [
                    "الدرس الأول: الضمير والإرادة",
                    "الدرس الثاني: الإدمان والتدخين وخطرهما",
                    "الدرس الثالث: الزراعة والأمن القومي"
                ]
            },
            {
                title: "ثانياً: الأدب والنصوص",
                lessons: [
                    "الدرس الأول: مرحباً بالربيع (شعر لـ صفي الدين الحلي)",
                    "الدرس الثاني: كن صادقاً (نثر لـ مصطفى لطفي المنفلوطي)",
                    "الدرس الثالث: أيها العمال (شعر لـ أحمد شوقي)"
                ]
            },
            {
                title: "ثالثاً: القواعد النحوية",
                lessons: [
                    "تمييز العدد",
                    "كم الاستفهامية وكم الخبرية",
                    "الاستثناء وأدواته"
                ]
            }
        ]
    },
    {
        id: "english",
        title: "English",
        icon: "fa-language",
        lang: "en",
        dir: "ltr",
        sections: [
            {
                title: "Units",
                lessons: [
                    "Unit 7: Caring Communities",
                    "Unit 8: Creating a Better Community",
                    "Unit 9: When Art Speaks",
                    "Unit 10: Find Your Passion!",
                    "Unit 11: Healthy Choices, Healthy Life",
                    "Unit 12: Time Habits & Punctuality"
                ]
            }
        ]
    },
    {
        id: "mechanics",
        title: "Mechanics",
        icon: "fa-gears",
        lang: "en",
        dir: "ltr",
        sections: [
            {
                title: "Lessons",
                lessons: [
                    "1. Rectilinear motion",
                    "2. First law of motion with uniform acceleration",
                    "3. Second law of motion with uniform acceleration",
                    "4. Third law of motion with uniform acceleration",
                    "5. Average velocity during the nth second",
                    "6. First law of vertical motion",
                    "7. Second law of vertical motion",
                    "8. Third law of vertical motion",
                    "9. Universal gravitation law",
                    "10. Comparing accelerations due to gravities on the surfaces of two planets"
                ]
            }
        ]
    },
    {
        id: "physics",
        title: "Physics",
        icon: "fa-bolt",
        lang: "ar", 
        dir: "rtl",
        sections: [
            {
                title: "الوحدة الأولى: الكهرباء الساكنة (Static Electricity)",
                lessons: [
                    "Lesson 1: Meaning of static electricity",
                    "Lesson 2: Coulomb's law",
                    "Lesson 3: The repulsive and attractive forces",
                    "Lesson 4: The electric field",
                    "Lesson 5: The electric capacitor"
                ]
            },
            {
                title: "الوحدة التانية: الكهرباء الديناميكية (Dynamic Electricity)",
                lessons: [
                    "Lesson 1: Some concepts of dynamic electricity",
                    "Lesson 2: Ohm's law",
                    "Lesson 3: Ohmic resistance",
                    "Lesson 4: Ohm's law for closed circuit",
                    "Lesson 5: Connections of resistors"
                ]
            }
        ]
    },
    {
        id: "social",
        title: "الدراسات الاجتماعية",
        icon: "fa-earth-africa",
        lang: "ar",
        dir: "rtl",
        sections: [
            {
                title: "الوحدة الثالثة: الأحوال الاقتصادية لمصر الحديثة",
                lessons: [
                    "الدرس الأول: الحياة الاقتصادية في عهد سعيد باشا",
                    "الدرس الثاني: الجيش والأسطول في عهد سعيد باشا",
                    "الدرس الثالث: الحياة الاقتصادية في عهد الخديوي إسماعيل",
                    "الدرس الرابع: نظم الري والصرف الزراعي",
                    "الدرس الخامس: التنمية الاقتصادية حتى ثورة ١٩٥٢م"
                ]
            },
            {
                title: "الوحدة الرابعة: الزراعة والصناعة والسياحة",
                lessons: [
                    "الدرس الأول: المحاصيل الزراعية",
                    "الدرس الثاني: عوامل قيام الصناعة في مصر",
                    "الدرس الثالث: الصناعات الغذائية في مصر",
                    "الدرس الرابع: الصناعات المعدنية في مصر",
                    "الدرس الخامس: السياحة وأنواعها في مصر"
                ]
            }
        ]
    },
    {
        id: "math",
        title: "Math",
        icon: "fa-calculator",
        lang: "en",
        dir: "ltr",
        sections: [
            {
                title: "Lessons",
                lessons: [
                    "One: Rules of differentiation",
                    "Two: Derivative of the product of two functions",
                    "Three: Derivative of the quotient of two functions",
                    "Four: Derivative of composite functions",
                    "Five: Derivative of trigonometric functions",
                    "Six: Derivative of trigonometric functions (follow)",
                    "Seven: Equation of tangent",
                    "Eight: Equation of normal",
                    "Nine: Indefinite integration",
                    "Ten: Indefinite integration (follow)"
                ]
            }
        ]
    }
];

// App State
let progressData = JSON.parse(localStorage.getItem('myProgressData')) || {};
let tasksData = JSON.parse(localStorage.getItem('myTasksData')) || [];
let examsData = JSON.parse(localStorage.getItem('myExamsData')) || {}; // { subjectId: { lessonId: { title: "string", reviewed: boolean } } }

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('subjects-container');
    
    // Render subjects
    subjectsData.forEach(subject => {
        container.appendChild(createSubjectCard(subject));
    });

    updateOverallProgress();
    updateAccumulatedLessons();
    updateAheadLessons();
    populateTaskSubjects();
    renderTasks();
    renderExams();

    // Event listeners
    container.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const subjectId = e.target.dataset.subject;
            const lessonId = e.target.dataset.lesson;
            const type = e.target.dataset.type;
            
            // Initialization for backward compatibility
            if (!progressData[lessonId] || typeof progressData[lessonId] !== 'object') {
                progressData[lessonId] = {
                    me: typeof progressData[lessonId] === 'boolean' ? progressData[lessonId] : false,
                    school: false
                };
            }
            
            progressData[lessonId][type] = e.target.checked;
            saveProgress();
            
            // Toggle completed class visually
            const itemDiv = document.getElementById(`item-${lessonId}`);
            if (itemDiv) {
                if (progressData[lessonId].me) {
                    itemDiv.classList.add('completed');
                } else {
                    itemDiv.classList.remove('completed');
                }
            }

            // Sync with tasks if applicable
            if (type === 'me') {
                const taskIndex = tasksData.findIndex(t => t.lessonId === lessonId);
                if (taskIndex !== -1) {
                    tasksData[taskIndex].completed = e.target.checked;
                    saveTasks();
                    renderTasks();
                }
            }
            
            // Update individual subject progress
            updateSubjectProgress(subjectId);
            
            // Update overall progress
            updateOverallProgress();
            updateAccumulatedLessons();
            updateAheadLessons();
        }
    });

    // Delegated event listener for accumulated section
    const accumulatedWrapper = document.getElementById('accumulated-wrapper');
    if (accumulatedWrapper) {
        accumulatedWrapper.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' && e.target.dataset.accumulatedLesson) {
                const lessonId = e.target.dataset.accumulatedLesson;
                const subjectId = e.target.dataset.subject;
                
                // Mark 'me' as true
                if (!progressData[lessonId] || typeof progressData[lessonId] !== 'object') {
                    progressData[lessonId] = { me: false, school: true };
                }
                progressData[lessonId].me = true;
                saveProgress();

               // Update main checkbox and class
               const mainCheckbox = document.getElementById(`${lessonId}-me`);
               if (mainCheckbox) mainCheckbox.checked = true;
               
               const itemDiv = document.getElementById(`item-${lessonId}`);
               if (itemDiv) itemDiv.classList.add('completed');

               updateSubjectProgress(subjectId);
               updateOverallProgress();
               updateAccumulatedLessons();
               updateAheadLessons();
            }
        });
    }

    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('هل أنت متأكد من إعادة ضبط كل التقدم؟ (سيمسح جميع الإنجازات)')) {
            progressData = {};
            saveProgress();
            
            // Uncheck all boxes
            document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.checked = false;
            });
            // Remove completed class
            document.querySelectorAll('.lesson-item').forEach(item => {
                item.classList.remove('completed');
            });
            
            // Reset tasks
            tasksData = [];
            saveTasks();
            renderTasks();
            
            // Reset exams
            examsData = {};
            saveExams();
            renderExams();
            
            // Reset progresses
            subjectsData.forEach(s => updateSubjectProgress(s.id));
            updateOverallProgress();
            updateAccumulatedLessons();
            updateAheadLessons();
        }
    });

    // --- Tasks Logic ---
    const subjectSelect = document.getElementById('task-subject-select');
    const lessonSelect = document.getElementById('task-lesson-select');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksList = document.getElementById('tasks-list');

    subjectSelect.addEventListener('change', (e) => {
        const subjectId = e.target.value;
        if (subjectId) {
            populateTaskLessons(subjectId);
            lessonSelect.disabled = false;
        } else {
            lessonSelect.innerHTML = '<option value="" disabled selected>اختر الدرس...</option>';
            lessonSelect.disabled = true;
            addTaskBtn.disabled = true;
        }
    });

    lessonSelect.addEventListener('change', (e) => {
        if (e.target.value) {
            addTaskBtn.disabled = false;
        } else {
            addTaskBtn.disabled = true;
        }
    });

    addTaskBtn.addEventListener('click', handleAddTask);

    tasksList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.classList.contains('task-checkbox')) {
            const index = parseInt(e.target.dataset.index);
            const isCompleted = e.target.checked;
            tasksData[index].completed = isCompleted;
            saveTasks();
            renderTasks();
            
            // Sync with main progress
            const lessonId = tasksData[index].lessonId;
            const subjectId = tasksData[index].subjectId;
            
            if (lessonId && subjectId) {
                if (!progressData[lessonId] || typeof progressData[lessonId] !== 'object') {
                    progressData[lessonId] = { me: false, school: false };
                }
                progressData[lessonId].me = isCompleted;
                saveProgress();
                
                // Update main DOM elements
                const mainCheckbox = document.getElementById(`${lessonId}-me`);
                if (mainCheckbox) mainCheckbox.checked = isCompleted;
                
                const itemDiv = document.getElementById(`item-${lessonId}`);
                if (itemDiv) {
                    if (isCompleted) {
                        itemDiv.classList.add('completed');
                    } else {
                        itemDiv.classList.remove('completed');
                    }
                }
                
                updateSubjectProgress(subjectId);
                updateOverallProgress();
                updateAccumulatedLessons();
                updateAheadLessons();
            }
        }
    });

    tasksList.addEventListener('click', (e) => {
        const btn = e.target.closest('.delete-task-btn');
        if (btn) {
            const index = parseInt(btn.dataset.index);
            tasksData.splice(index, 1);
            saveTasks();
            renderTasks();
        }
    });

    function handleAddTask() {
        const subjectId = subjectSelect.value;
        const lessonValue = lessonSelect.value; // format: "sIndex-lIndex"
        
        if (subjectId && lessonValue) {
            const [sIndex, lIndex] = lessonValue.split('-');
            const subject = subjectsData.find(s => s.id === subjectId);
            const lessonName = subject.sections[sIndex].lessons[lIndex];
            
            const taskText = `${subject.title} - ${lessonName}`;
            
            // Check if already exists
            const exists = tasksData.some(t => t.text === taskText && !t.completed);
            
            if (!exists) {
                tasksData.push({ text: taskText, completed: false, subjectId, lessonId: `${subjectId}-s${sIndex}-l${lIndex}` });
                saveTasks();
                renderTasks();
            }
            
            // Reset selects
            subjectSelect.value = "";
            lessonSelect.innerHTML = '<option value="" disabled selected>اختر الدرس...</option>';
            lessonSelect.disabled = true;
            addTaskBtn.disabled = true;
        }
    }

    // --- Exams Logic ---
    const examsSectionMain = document.getElementById('exams-section-main');
    const examsMainTitle = document.getElementById('exams-main-title');
    const openExamsModalBtn = document.getElementById('open-exams-modal-btn');
    const examsModal = document.getElementById('exams-modal');
    const closeExamsModalBtn = document.getElementById('close-exams-modal-btn');
    const saveExamsBtn = document.getElementById('save-exams-btn');
    const examsModalBody = document.getElementById('exams-modal-body');
    const examsList = document.getElementById('exams-subjects-list');

    // Toggle entire exams section
    examsMainTitle.addEventListener('click', () => {
        if (window.getSelection().toString().length > 0) return;
        examsSectionMain.classList.toggle('expanded');
    });

    // State variable to hold temporary selections inside modal
    let tempExamSelections = {};

    openExamsModalBtn.addEventListener('click', () => {
        populateExamsModal();
        examsModal.style.display = 'flex';
        // Trigger reflow for transition
        examsModal.offsetHeight;
        examsModal.classList.add('active');
    });

    function closeExamsModal() {
        examsModal.classList.remove('active');
        setTimeout(() => {
            examsModal.style.display = 'none';
        }, 300);
    }

    closeExamsModalBtn.addEventListener('click', closeExamsModal);
    
    // Close modal if clicked outside content
    examsModal.addEventListener('click', (e) => {
        if (e.target === examsModal) {
            closeExamsModal();
        }
    });

    saveExamsBtn.addEventListener('click', () => {
        // Find all checked boxes in the modal and update examsData
        const checkboxes = examsModalBody.querySelectorAll('.modal-lesson-checkbox');
        
        checkboxes.forEach(cb => {
            const subjectId = cb.dataset.subject;
            const lessonId = cb.dataset.lesson;
            const lessonName = cb.dataset.title;
            
            if (cb.checked) {
                if (!examsData[subjectId]) {
                    examsData[subjectId] = {};
                }
                if (!examsData[subjectId][lessonId]) {
                    examsData[subjectId][lessonId] = {
                        title: lessonName,
                        reviewed: false
                    };
                }
            } else {
                // If it was previously tracked, remove it if unchecked in modal? 
                // Let's only ADD via the modal, and remove via the list. So unchecked in modal does nothing if already added. 
                // Or maybe the user expects it to reflect exactly the state? Let's make it reflect the state exactly.
                if (examsData[subjectId] && examsData[subjectId][lessonId]) {
                    delete examsData[subjectId][lessonId];
                    // Clean up empty subjects
                    if (Object.keys(examsData[subjectId]).length === 0) {
                        delete examsData[subjectId];
                    }
                }
            }
        });
        
        saveExams();
        renderExams();
        closeExamsModal();
    });

    examsList.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.classList.contains('exam-checkbox')) {
            const subjectId = e.target.dataset.subject;
            const lessonId = e.target.dataset.lesson;
            
            if (examsData[subjectId] && examsData[subjectId][lessonId]) {
                examsData[subjectId][lessonId].reviewed = e.target.checked;
                saveExams();
                renderExams();
            }
        }
    });

    examsList.addEventListener('click', (e) => {
        const btn = e.target.closest('.delete-exam-lesson-btn');
        if (btn) {
            const subjectId = btn.dataset.subject;
            const lessonId = btn.dataset.lesson;
            
            if (examsData[subjectId] && examsData[subjectId][lessonId]) {
                delete examsData[subjectId][lessonId];
                if (Object.keys(examsData[subjectId]).length === 0) {
                    delete examsData[subjectId];
                }
                saveExams();
                renderExams();
            }
        }
    });

    function populateExamsModal() {
        examsModalBody.innerHTML = '';
        
        subjectsData.forEach(subject => {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'modal-subject-group';
            groupDiv.setAttribute('dir', subject.dir);
            
            const title = document.createElement('h3');
            title.className = 'modal-subject-title';
            title.textContent = subject.title;
            groupDiv.appendChild(title);
            
            const grid = document.createElement('div');
            grid.className = 'modal-lessons-grid';
            
            subject.sections.forEach((section, sIndex) => {
                section.lessons.forEach((lesson, lIndex) => {
                    const lessonId = `${subject.id}-s${sIndex}-l${lIndex}`;
                    const isChecked = examsData[subject.id] && examsData[subject.id][lessonId] ? 'checked' : '';
                    
                    const label = document.createElement('label');
                    label.className = 'modal-lesson-label';
                    label.innerHTML = `
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="custom-checkbox modal-lesson-checkbox" 
                                data-subject="${subject.id}" 
                                data-lesson="${lessonId}" 
                                data-title="${lesson}"
                                ${isChecked}>
                        </div>
                        <span class="modal-lesson-text" dir="auto">${lesson}</span>
                    `;
                    grid.appendChild(label);
                });
            });
            
            groupDiv.appendChild(grid);
            examsModalBody.appendChild(groupDiv);
        });
    }
});

function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = `subject-card subject-${subject.id}`;
    card.setAttribute('dir', subject.dir);
    if(subject.lang) card.setAttribute('lang', subject.lang);

    // Calculate total lessons for this subject
    let totalLessons = 0;
    subject.sections.forEach(sec => totalLessons += sec.lessons.length);
    
    // Header
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
        <i class="fa-solid ${subject.icon} subject-icon"></i>
        <h2>${subject.title}</h2>
        <div class="subject-progress">
            <div class="subject-progress-info">
                <span>التقدم</span>
                <span id="text-progress-${subject.id}">0%</span>
            </div>
            <div class="subject-progress-bg">
                <div class="subject-progress-fill" id="bar-progress-${subject.id}"></div>
            </div>
        </div>
    `;
    // Add click event for toggle collapse
    header.addEventListener('click', (e) => {
        // Prevent toggle if text was selected
        if (window.getSelection().toString().length > 0) return;
        card.classList.toggle('expanded');
    });

    card.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'card-body';
    
    subject.sections.forEach((section, sIndex) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'section';
        
        const sectionTitle = document.createElement('h3');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        sectionDiv.appendChild(sectionTitle);
        
        section.lessons.forEach((lesson, lIndex) => {
            const lessonId = `${subject.id}-s${sIndex}-l${lIndex}`;
            
            const isMeChecked = progressData[lessonId]?.me || (typeof progressData[lessonId] === 'boolean' && progressData[lessonId]) ? 'checked' : '';
            const isSchoolChecked = progressData[lessonId]?.school ? 'checked' : '';
            const isCompleted = isMeChecked ? 'completed' : '';
            
            const lessonDiv = document.createElement('div');
            lessonDiv.className = `lesson-item ${isCompleted}`;
            lessonDiv.id = `item-${lessonId}`;
            
            lessonDiv.innerHTML = `
                <span class="lesson-text" dir="auto">${lesson}</span>
                <div class="lesson-actions">
                    <label class="checkbox-label" title="أنا">
                        <span dir="rtl">أنا</span>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="custom-checkbox me-checkbox" id="${lessonId}-me" data-subject="${subject.id}" data-lesson="${lessonId}" data-type="me" ${isMeChecked}>
                        </div>
                    </label>
                    <label class="checkbox-label" title="فتح الله/المدرسة">
                        <span dir="rtl">فتح الله</span>
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="custom-checkbox school-checkbox" id="${lessonId}-school" data-subject="${subject.id}" data-lesson="${lessonId}" data-type="school" ${isSchoolChecked}>
                        </div>
                    </label>
                </div>
            `;
            
            sectionDiv.appendChild(lessonDiv);
        });
        
        body.appendChild(sectionDiv);
    });
    
    card.appendChild(body);
    
    // Initialize this subject's progress progress
    setTimeout(() => {
        updateSubjectProgress(subject.id);
    }, 100);

    return card;
}

function updateSubjectProgress(subjectId) {
    const subject = subjectsData.find(s => s.id === subjectId);
    if (!subject) return;

    let total = 0;
    let completed = 0;

    subject.sections.forEach((section, sIndex) => {
        section.lessons.forEach((_, lIndex) => {
            total++;
            const lessonId = `${subjectId}-s${sIndex}-l${lIndex}`;
            if (progressData[lessonId]) {
                if (typeof progressData[lessonId] === 'object') {
                    if (progressData[lessonId].me) completed++;
                } else if (progressData[lessonId] === true) {
                    completed++;
                }
            }
        });
    });

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    const textEl = document.getElementById(`text-progress-${subjectId}`);
    const barEl = document.getElementById(`bar-progress-${subjectId}`);
    
    if (textEl) textEl.textContent = `${percentage}%`;
    if (barEl) barEl.style.width = `${percentage}%`;
}

function updateOverallProgress() {
    let total = 0;
    let completed = 0;

    subjectsData.forEach(subject => {
        subject.sections.forEach((section, sIndex) => {
            section.lessons.forEach((_, lIndex) => {
                total++;
                const lessonId = `${subject.id}-s${sIndex}-l${lIndex}`;
                if (progressData[lessonId]) {
                    if (typeof progressData[lessonId] === 'object') {
                        if (progressData[lessonId].me) completed++;
                    } else if (progressData[lessonId] === true) {
                        completed++;
                    }
                }
            });
        });
    });

    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    
    const textEl = document.getElementById('overall-percentage');
    const barEl = document.getElementById('overall-progress-bar');
    
    if (textEl) textEl.textContent = `${percentage}%`;
    if (barEl) barEl.style.width = `${percentage}%`;
}

function saveProgress() {
    localStorage.setItem('myProgressData', JSON.stringify(progressData));
}

function updateAccumulatedLessons() {
    const listEl = document.getElementById('accumulated-list');
    const wrapper = document.getElementById('accumulated-wrapper');
    if (!listEl || !wrapper) return;

    listEl.innerHTML = '';
    let hasAccumulated = false;

    subjectsData.forEach(subject => {
        subject.sections.forEach((section, sIndex) => {
            section.lessons.forEach((lessonName, lIndex) => {
                const lessonId = `${subject.id}-s${sIndex}-l${lIndex}`;
                // Backward compatibility check
                const me = progressData[lessonId]?.me || (typeof progressData[lessonId] === 'boolean' && progressData[lessonId]);
                const school = progressData[lessonId]?.school;

                if (school && !me) {
                    hasAccumulated = true;
                    const item = document.createElement('div');
                    item.className = 'accumulated-item';
                    item.innerHTML = `
                        <div class="accumulated-item-info">
                            <span class="accumulated-subject">${subject.title} - ${section.title}</span>
                            <span class="accumulated-lesson" dir="auto">${lessonName}</span>
                        </div>
                        <label class="accumulated-check checkbox-label" title="علم كمكتمل">
                            <span>تم الإنجاز <i class="fa-solid fa-check-double"></i></span>
                            <div class="checkbox-wrapper">
                                <input type="checkbox" class="custom-checkbox" data-accumulated-lesson="${lessonId}" data-subject="${subject.id}">
                            </div>
                        </label>
                    `;
                    listEl.appendChild(item);
                }
            });
        });
    });

    if (hasAccumulated) {
        wrapper.style.display = 'block';
    } else {
        wrapper.style.display = 'none';
    }
}

function updateAheadLessons() {
    const listEl = document.getElementById('ahead-list');
    const wrapper = document.getElementById('ahead-wrapper');
    if (!listEl || !wrapper) return;

    listEl.innerHTML = '';
    let hasAhead = false;

    subjectsData.forEach(subject => {
        subject.sections.forEach((section, sIndex) => {
            section.lessons.forEach((lessonName, lIndex) => {
                const lessonId = `${subject.id}-s${sIndex}-l${lIndex}`;
                // Backward compatibility check
                const me = progressData[lessonId]?.me || (typeof progressData[lessonId] === 'boolean' && progressData[lessonId]);
                const school = progressData[lessonId]?.school;

                if (me && !school) {
                    hasAhead = true;
                    const item = document.createElement('div');
                    item.className = 'ahead-item';
                    item.innerHTML = `
                        <div class="ahead-item-info">
                            <span class="ahead-subject">${subject.title} - ${section.title}</span>
                            <span class="ahead-lesson" dir="auto">${lessonName}</span>
                        </div>
                        <div class="ahead-icon" title="بطل!">
                            <i class="fa-solid fa-star"></i>
                        </div>
                    `;
                    listEl.appendChild(item);
                }
            });
        });
    });

    if (hasAhead) {
        wrapper.style.display = 'block';
    } else {
        wrapper.style.display = 'none';
    }
}

// Tasks Functions
function populateTaskSubjects() {
    const subjectSelect = document.getElementById('task-subject-select');
    if (!subjectSelect) return;
    
    subjectsData.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.id;
        option.textContent = subject.title;
        subjectSelect.appendChild(option);
    });
}

function populateTaskLessons(subjectId) {
    const lessonSelect = document.getElementById('task-lesson-select');
    const addTaskBtn = document.getElementById('add-task-btn');
    if (!lessonSelect) return;
    
    lessonSelect.innerHTML = '<option value="" disabled selected>اختر الدرس...</option>';
    
    const subject = subjectsData.find(s => s.id === subjectId);
    if (!subject) return;

    subject.sections.forEach((section, sIndex) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = section.title;
        
        section.lessons.forEach((lesson, lIndex) => {
            const option = document.createElement('option');
            option.value = `${sIndex}-${lIndex}`;
            option.textContent = lesson;
            optgroup.appendChild(option);
        });
        
        lessonSelect.appendChild(optgroup);
    });
    
    addTaskBtn.disabled = true;
}

function saveTasks() {
    localStorage.setItem('myTasksData', JSON.stringify(tasksData));
}

function renderTasks() {
    const listEl = document.getElementById('tasks-list');
    if (!listEl) return;

    listEl.innerHTML = '';
    
    if (tasksData.length === 0) {
        listEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); font-size: 0.9rem; padding: 1rem 0;">لا يوجد مهام حالياً. أضف مهمتك الأولى!</p>';
        return;
    }

    tasksData.forEach((task, index) => {
        const item = document.createElement('div');
        item.className = `task-item ${task.completed ? 'task-completed' : ''}`;
        
        item.innerHTML = `
            <div class="task-content">
                <div class="checkbox-wrapper">
                    <input type="checkbox" class="custom-checkbox task-checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
                </div>
                <span class="task-text">${task.text}</span>
            </div>
            <div class="task-actions">
                <button class="delete-task-btn" data-index="${index}" title="حذف المهمة">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
        listEl.appendChild(item);
    });
}

// Exams Functions
function saveExams() {
    localStorage.setItem('myExamsData', JSON.stringify(examsData));
}

function renderExams() {
    const listEl = document.getElementById('exams-subjects-list');
    const wrapper = document.getElementById('exams-wrapper');
    if (!listEl || !wrapper) return;

    listEl.innerHTML = '';
    
    if (Object.keys(examsData).length === 0) {
        listEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); font-size: 0.9rem; padding: 1rem 0;">لا توجد مواد محددة للامتحانات بعد. أضف الدروس التي تحتاج لمراجعتها.</p>';
        return;
    }

    // Convert examsData object to an array of populated subjects
    const subjectsToRender = Object.keys(examsData).map(subjId => {
        return {
            subject: subjectsData.find(s => s.id === subjId),
            lessons: examsData[subjId]
        };
    }).filter(s => s.subject && Object.keys(s.lessons).length > 0);

    if (subjectsToRender.length === 0) {
         listEl.innerHTML = '<p style="text-align: center; color: var(--text-secondary); font-size: 0.9rem; padding: 1rem 0;">لا توجد مواد محددة للامتحانات بعد.</p>';
         return;
    }

    subjectsToRender.forEach(renderData => {
        const total = Object.keys(renderData.lessons).length;
        const reviewed = Object.values(renderData.lessons).filter(l => l.reviewed).length;
        const percentage = total === 0 ? 0 : Math.round((reviewed / total) * 100);

        const card = document.createElement('div');
        card.className = 'exam-subject-card';
        card.setAttribute('dir', renderData.subject.dir);

        let lessonsHTML = '';
        Object.keys(renderData.lessons).forEach(lessonId => {
            const lesson = renderData.lessons[lessonId];
            const isReviewed = lesson.reviewed ? 'checked' : '';
            const reviewedClass = lesson.reviewed ? 'reviewed' : '';
            
            lessonsHTML += `
                <div class="exam-lesson-item ${reviewedClass}">
                    <label class="exam-lesson-item-label">
                        <div class="checkbox-wrapper">
                            <input type="checkbox" class="custom-checkbox exam-checkbox" data-subject="${renderData.subject.id}" data-lesson="${lessonId}" ${isReviewed}>
                        </div>
                        <span class="exam-lesson-text" dir="auto">${lesson.title}</span>
                    </label>
                    <button class="delete-exam-lesson-btn" data-subject="${renderData.subject.id}" data-lesson="${lessonId}" title="إزالة من الامتحان">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="exam-subject-header">
                <span class="exam-subject-title">${renderData.subject.title}</span>
                <div class="exam-subject-progress">
                    <span style="font-size: 0.9rem; color: var(--text-secondary);">${percentage}% المراجعة</span>
                    <div class="exam-progress-bg" dir="ltr">
                        <div class="exam-progress-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            </div>
            <div class="exam-lessons-grid">
                ${lessonsHTML}
            </div>
        `;

        const header = card.querySelector('.exam-subject-header');
        header.addEventListener('click', () => {
             if (window.getSelection().toString().length > 0) return;
             card.classList.toggle('expanded');
        });

        listEl.appendChild(card);
    });
}

