document.addEventListener('DOMContentLoaded', function() {
    const monthYear = document.getElementById('monthYear');
    const daysContainer = document.getElementById('daysContainer');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    let currentDate = new Date();
    const today = new Date(); // Data de hoje

    const holidays = {
        '01-01': 'Ano Novo',
        '04-21': 'Tiradentes',
        '05-01': 'Dia do Trabalho',
        '09-07': 'Independência do Brasil',
        '10-12': 'Nossa Senhora Aparecida',
        '11-02': 'Finados',
        '11-15': 'Proclamação da República',
        '12-25': 'Natal'
    };

    function renderCalendar() {
        daysContainer.innerHTML = '';
        monthYear.textContent = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty');
            daysContainer.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;
            
            const monthDay = `${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            if (holidays[monthDay]) {
                dayDiv.classList.add('holiday');
                dayDiv.title = holidays[monthDay]; // Adiciona o nome do feriado como tooltip
            }

            // Marcar o dia atual
            if (day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear()) {
                dayDiv.classList.add('today');
            }

            daysContainer.appendChild(dayDiv);
        }
    }

    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
