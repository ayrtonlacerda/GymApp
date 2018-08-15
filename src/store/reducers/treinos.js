const treinoA = require('../../assents/imgs/peito.png');
const treinoB = require('../../assents/imgs/treinocostas.png');
const treinoC = require('../../assents/imgs/perna.png');

const initialState = [
  {
    tipo: 'Treino A',
    descricao: 'Peito e Triceps',
    imagem: treinoA,
    serie:[
            {
              exercicio: 'Pull-over',
              repeticao: 3,
              descanso: '45s',
              peso: '35 Kg',
            },
            {
              exercicio: 'Supino inclinado',
              repeticao: 3,
              descanso: '45s',
              peso: '20 Kg',
            },
            {
              exercicio: 'Crossover polia',
              repeticao: 3,
              descanso: '45s',
              peso: '40 Kg',
            },
            {
              exercicio: 'Guilhotina em pé',
              repeticao: 3,
              descanso: '45s',
              peso: '10 Kg',
            },
            {
              exercicio: 'Polia unilateral corda',
              repeticao: 3,
              descanso: '45s',
              peso: '20 Kg',
            },
            {
              exercicio: 'Tríceps supoinado',
              repeticao: 3,
              descanso: '45s',
              peso: '15 Kg',
            },
            {
              exercicio: 'Mergulho máquina',
              repeticao: 3,
              descanso: '45s',
              peso: '40 Kg',
            },
            {
              exercicio: 'Paralela livre',
              repeticao: 3,
              descanso: '45s',
              peso: 'Sem peso',
            },
        ],
  },
  {
    tipo: 'Treino B',
    descricao: 'Costas e Biceps',
    imagem: treinoB,
    serie: [
            {
                exercicio: 'Puxada Supinada',
                repeticao: 3,
                descanso: '45s',
                peso: '35 Kg',
            },
            {
                exercicio: 'Remada aberta',
                repeticao: 3,
                descanso: '45s',
                peso: '50 Kg',
            },
            {
                exercicio: 'Puxada frente triângulo',
                repeticao: 3,
                descanso: '45s',
                peso: '40 Kg',
            },
            {
                exercicio: 'Remada curvada barra',
                repeticao: 3,
                descanso: '45s',
                peso: '15 Kg',
            },
            {
                exercicio: 'Rosca bíceps sentado',
                repeticao: 3,
                descanso: '45s',
                peso: '10 Kg',
            },
            {
                exercicio: 'Scott máquina',
                repeticao: 3,
                descanso: '45s',
                peso: '25 Kg',
            },
            {
                exercicio: 'Martelo Halter',
                repeticao: 3,
                descanso: '45s',
                peso: '8 Kg',
            },
            {
                exercicio: 'Rosca direta barra',
                repeticao: 3,
                descanso: '45s',
                peso: '7.5 Kg',
            }
          ]
  },
  {
    tipo: 'Treino C',
    descricao: 'Perna e Abdômem',
    imagem: treinoC,
    serie: [
            {
                exercicio: 'Leg 45º',
                repeticao: 3,
                descanso: '45s',
                peso: '60 Kg',
            },
            {
                exercicio: 'Agachamento livre',
                repeticao: 3,
                descanso: '45s',
                peso: '15 Kg',
            },
            {
                exercicio: 'Extensora',
                repeticao: 3,
                descanso: '45s',
                peso: '20 Kg',
            },
            {
                exercicio: 'Adução',
                repeticao: 4,
                descanso: '45s',
                peso: '50 Kg',
            },
            {
                exercicio: 'Elevação panturrilha leg 45º',
                repeticao: 3,
                descanso: '45s',
                peso: '40 Kg',
            },
            {
                exercicio: 'Elevação panturrilhas em pé',
                repeticao: 3,
                descanso: '45s',
                peso: '20 Kg',
            },
            {
                exercicio: 'Abdominal reto com elevação de tronco',
                repeticao: 4,
                descanso: '45s',
                peso: '10 Kg',
            },
            {
                exercicio: 'Inferior',
                repeticao: 4,
                descanso: '45s',
                peso: '5 Kg',
            }
          ]
  },
]

export default function treinos(state = initialState, action) {
  return state;
}
