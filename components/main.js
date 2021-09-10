function calcula(){
    var larg = document.getElementById('larguraparede').value
    var alt = document.getElementById('alturaparede').value
    var janela = document.getElementById('qtdjanelas').value
    var porta = document.getElementById('qtdportas').value

    janela = 2 * 1.20
    porta = 0.8 * 1.90

    area = larg * alt - janela - porta
    
    alert('Sua parede tem a dimensão de ' + larg+'x'+alt + ' e sua área é de ' + area +'m²')

    tinta = area / 2

    alert('Para pintar essa parede, você precisará de ' + tinta + 'L de tinta')
}