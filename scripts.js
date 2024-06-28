document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('next-button');
    const interestSelect = document.getElementById('interest');
    const subinterestSelect = document.getElementById('subinterest');
    const careerRecommendation = document.getElementById('career-recommendation');
    const steps = document.querySelectorAll('.form-step');
    let currentStep = 0;

    const careerOptions = {
        technology: {
            label: "Tecnologia",
            subinterests: {
                development: "Desenvolvimento de Software",
                data: "Ciência de Dados",
                security: "Segurança da Informação"
            },
            recommendations: {
                development: "Engenheiro de Software",
                data: "Cientista de Dados",
                security: "Analista de Segurança da Informação"
            }
        },
        arts: {
            label: "Artes",
            subinterests: {
                design: "Design Gráfico",
                music: "Música",
                literature: "Literatura"
            },
            recommendations: {
                design: "Designer Gráfico",
                music: "Músico",
                literature: "Escritor"
            }
        },
        science: {
            label: "Ciência",
            subinterests: {
                biology: "Biologia",
                chemistry: "Química",
                physics: "Física"
            },
            recommendations: {
                biology: "Biólogo",
                chemistry: "Químico",
                physics: "Físico"
            }
        }
    };

    nextButton.addEventListener('click', function() {
        if (currentStep === 0) {
            const interest = interestSelect.value;
            if (interest) {
                populateSubinterests(interest);
                showStep(1);
            } else {
                alert("Por favor, selecione seu principal interesse.");
            }
        } else if (currentStep === 1) {
            const subinterest = subinterestSelect.value;
            if (subinterest) {
                showRecommendation(subinterest);
                showStep(2);
                nextButton.style.display = 'none';
            } else {
                alert("Por favor, selecione sua área específica de interesse.");
            }
        }
    });

    function populateSubinterests(interest) {
        subinterestSelect.innerHTML = '<option value="">Selecione</option>';
        for (let key in careerOptions[interest].subinterests) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = careerOptions[interest].subinterests[key];
            subinterestSelect.appendChild(option);
        }
    }

    function showRecommendation(subinterest) {
        const interest = interestSelect.value;
        const recommendation = careerOptions[interest].recommendations[subinterest];
        careerRecommendation.textContent = recommendation;
    }

    function showStep(stepIndex) {
        steps[currentStep].style.display = 'none';
        steps[stepIndex].style.display = 'block';
        currentStep = stepIndex;
    }
});
