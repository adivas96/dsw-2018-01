var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var ids_botoes = ["btn01", "btn02", "btn03", "btn04", "btn05", "btn06", "btn07", "btn08", "btn09"];
var jogador1 = true;
var vencedor = false;

// Jogadas vencedoras
var jv = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

$(document).ready(function() {

    $(".btnCasa").click(function () {

        if (vencedor)
            return;

        var id = $(this).attr("id");
        var idx = ids_botoes.indexOf(id);

        if (tabuleiro[idx] != 0)
            return;

        if (jogador1) {
            $(this).html("X");
            tabuleiro[idx] = 1;
        } else {
            $(this).html("O");
            tabuleiro[idx] = 2;
        }

        for (var i = 0; i < 8; ++i) {
            if ( ( tabuleiro[jv[i][0]] != 0 ) &&
                 ( tabuleiro[jv[i][0]] == tabuleiro[jv[i][1]] ) &&
                 ( tabuleiro[jv[i][1]] == tabuleiro[jv[i][2]] ) ) {

                vencedor = true;

                $("#" + ids_botoes[jv[i][0]]).css("color", "blue");
                $("#" + ids_botoes[jv[i][1]]).css("color", "blue");
                $("#" + ids_botoes[jv[i][2]]).css("color", "blue");

                return;
            }

        }

        jogador1 = !jogador1;

    });

});


