package sistema;

import javax.management.timer.Timer;
import java.sql.Time;
import java.util.LinkedList;
import java.util.Queue;

public class FilaProcessos {
    Queue<Processo> processos;

    public FilaProcessos() {
        processos = new LinkedList<>();
    }

    public void adicionarProcesso(Processo processo) {
        processos.add(processo);
        System.out.println("Processo " + processo.getNome() + " foi adicionado.\n");
    }

    private void executar(String nome) throws InterruptedException {
        String[] estados = {
                "execução.",
                "execução..",
                "execução...",
                "execução....",
                "execução.....",
                "execução......"
        };
        for (int i = 0; i < 20; i++) {
            System.out.print("\rProcesso " + nome + " esta em " + estados[i % estados.length]);
            Thread.sleep(500);
        }
        System.out.println("\rO processo " + nome +" foi executado!\n");
    }

    public void removerProcesso() throws InterruptedException {
        if (processos.isEmpty()) {
            System.out.println("Não há processos.\n");
            return ;
        }
        Processo processo = processos.poll();
        executar(processo.getNome());
        System.out.println("Processo " + processo.getNome() + " foi finalizado.\n");
    }


    public void executarProcesso() throws InterruptedException {
        if (processos.isEmpty()) {
            System.out.println("Não há processos.\n");
            return ;
        }
        Processo processo = processos.poll();
        executar(processo.getNome());
        processos.add(processo);
    }

    public void listarProcessos() {
        if (processos.isEmpty()) {
            System.out.println("Não há processos.\n");
            return ;
        }
        for (Processo processo : processos) {
            System.out.println("Processo: " + processo.getNome());
        }
        System.out.println();
    }
}
