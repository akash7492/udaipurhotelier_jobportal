
    function downloadPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Capture data from the form
        const formData = new FormData(document.getElementById('checklistForm'));

        // Add date
        const date = formData.get('date');
        doc.text(`Date: ${date}`, 10, 10);

        // Sections data
        const sections = ['Cleaning Tasks', 'Maintenance Tasks', 'Safety Checks', 'Inventory Checks'];
        let yPosition = 20;

        sections.forEach((section, index) => {
            doc.text(`${section}:`, 10, yPosition);
            yPosition += 10;
            
            const checkboxes = formData.getAll(`${section.toLowerCase().replace(/ /g, '')}[]`);
            checkboxes.forEach((checkbox, i) => {
                doc.text(`${i+1}. ${checkbox}`, 10, yPosition);
                yPosition += 5;
            });
        });

        // Extra Notes
        const extraNotes = formData.get('extraNotes');
        if (extraNotes) {
            doc.text(`Extra Notes: ${extraNotes}`, 10, yPosition);
            yPosition += 10;
        }

        // Signatures
        const employeeSignature = formData.get('employeeSignature');
        const supervisorSignature = formData.get('supervisorSignature');
        doc.text(`Employee Signature: ${employeeSignature}`, 10, yPosition);
        yPosition += 10;
        doc.text(`Supervisor Signature: ${supervisorSignature}`, 10, yPosition);

        // Save PDF
        doc.save('housekeeping_checklist.pdf');
    }