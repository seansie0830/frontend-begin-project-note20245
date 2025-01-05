<template>
	<div style="display: flex;">
		<div style="margin: auto;">
			<div v-if="started == false" class="text-h3	ma-10">
				歡迎來玩井字遊戲
			</div>
			<div v-if="started || repeat" class="text-h3 ma-10">
				{{ gameStatus2Render }}
			</div>
			<v-row v-for="(item, index) in chessState">
				<v-col v-for="(subitem, subindex) in item">
					<v-btn style="width: 135px; height: 130px;" :disabled="finite" @click="changeGrid(index, subindex)">
						<div class="text-h2">
							{{ subitem }}
						</div>
					</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="6">
					<v-btn color="light-blue-darken-4" block height="50px"
						:disabled="(nowPlayer == 'X' && started) && finite == false" @click="startGame('O')">
						<h1>
							O(先手)
						</h1>
					</v-btn>
				</v-col>
				<v-col cols="6">
					<v-btn color="red-darken-4" block height="50px"
						:disabled="(nowPlayer == 'O' && started) && finite == false" @click="startGame('X')">
						<h1>
							X(後手)
						</h1>
					</v-btn>
				</v-col>
			</v-row>
		</div>
	</div>
</template>
<script>
import { computed } from 'vue';

export default {
	data() {
		return {
			chessState: [
				['?', '?', '?'],
				['?', '?', '?'],
				['?', '?', '?']
			],
			started: false,
			nowPlayer: "",
			player: "",
			gameStatus: undefined,
			gameStatus2Render: "",
			finite: false
		}

	},
	methods: {
		startGame(role) {
			if (this.started && this.finite == false) {
				return;
			}
			this.player = role;
			this.started = true;
			this.nowPlayer = "O"
			this.finite = false;
			this.gameStatus = undefined
			this.gameStatus2Render = ""
			this.chessState = [
				['?', '?', '?'],
				['?', '?', '?'],
				['?', '?', '?']
			]
		},
		changeGrid(row, col) {
			if (this.started == false) {
				return
			}
			if (this.chessState[row][col] != '?') {
				return
			}
			this.chessState[row][col] = this.nowPlayer
			if (this.nowPlayer == "O") {
				this.nowPlayer = "X";
			}
			else {
				this.nowPlayer = "O"
			}
			this.judge()
			console.log(this.gameStatus)
		},
		judge() {
			// 檢查橫排
			for (let i = 0; i < 3; i++) {
				if (this.chessState[i][0] !== '?' && this.chessState[i][0] === this.chessState[i][1] && this.chessState[i][1] === this.chessState[i][2]) {
					this.gameStatus = this.chessState[i][0];
					this.refresh()
					return; // 判斷有玩家獲勝後，直接返回
				}
			}
			// 檢查直排
			for (let j = 0; j < 3; j++) {
				if (this.chessState[0][j] !== '?' && this.chessState[0][j] === this.chessState[1][j] && this.chessState[1][j] === this.chessState[2][j]) {
					this.gameStatus = this.chessState[0][j];
					this.refresh()
					return; // 判斷有玩家獲勝後，直接返回
				}
			}

			// 檢查對角線
			if (this.chessState[0][0] !== '?' && this.chessState[0][0] === this.chessState[1][1] && this.chessState[1][1] === this.chessState[2][2]) {
				this.gameStatus = this.chessState[0][0];
				this.refresh()
				return; // 判斷有玩家獲勝後，直接返回
			}
			if (this.chessState[0][2] !== '?' && this.chessState[0][2] === this.chessState[1][1] && this.chessState[1][1] === this.chessState[2][0]) {
				this.gameStatus = this.chessState[0][2];
				this.refresh()
				return; // 判斷有玩家獲勝後，直接返回
			}
		},
		refresh() {  // plan to refactor this function to computed methods
			if (this.gameStatus == undefined) {
				this.gameStatus2Render = ""
			}
			else if (this.gameStatus == "O") {
				this.gameStatus2Render = "O 贏了"
				this.finite = true;
			}
			else if (this.gameStatus == "X") {
				this.gameStatus2Render = "X 贏了"
				this.finite = true;
			}
		},

	}
}
</script>