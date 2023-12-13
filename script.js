function checkSymptoms() {
    const selectedSymptoms = getSelectedSymptoms();
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom.');
      return;
    }
    const prescription = getPrescription(selectedSymptoms);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Prescription: ${prescription}`;
  }

  function getSelectedSymptoms() {
    const selectElement = document.getElementById('symptomSelect');
    const selectedOptions = Array.from(selectElement.selectedOptions);
    return selectedOptions.map(option => option.value);
  }

  function getPrescription(symptoms) {
    // Replace with actual expert system logic (consult healthcare professionals)
    if(symptoms.includes('headache')) {
      return 'Take Acetaminophen 500mg, 1 tab every 4-6 hours as needed';
    }else if (symptoms.includes('fever')) {
      return 'Take Ibuprofen 200mg, 1 tab every 6 hours with food';
    }else if (symptoms.includes('cough')) {
      return 'Take Dextromethorphan syrup, 10ml every 4-6 hours';
    }else if (symptoms.includes('nausea')) {
      return 'Take Ondansetron 4mg, 1 tab every 8 hours as required';
    }else if (symptoms.includes('fatigue')) {
      return 'Take Adequate rest, hydrate, consider multivitamin supplementation';
    }else if (symptoms.includes('muscle-pain')) {
      return 'Take Ibuprofen 400mg, 1 tab every 6 hours';
    }else if (symptoms.includes('shortness-of-breath')) {
      return 'Take Seek immediate medical attention';
    }else if (symptoms.includes('diarrhea')) {
      return 'Take Loperamide 2mg, 1 tab after each loose stool';
    }else if (symptoms.includes('chest-pain')) {
      return 'Take mergency medical evaluation required';
    }else if (symptoms.includes('dizziness')) {
      return 'Take Rest, hydrate, avoid sudden movements. If persistent, consult';
    }else {
      return 'Consult a healthcare professional for accurate diagnosis and prescription';
    }
  }