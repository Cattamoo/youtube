export default class Youtube {
	constructor(apiClient) {
		this.apiClient = apiClient;
	}
	async search(keyword) {
		return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
	}
	async #searchByKeyword(keyword) {
		return this.apiClient.search({
				params: {
					part: 'snippet',
					maxResults: 25,
					type: 'video',
					regionCode: 'kr',
					q: keyword
				}
			})
			.then(res => res.data.items.map(item => ({...item, id: item.id.videoId})))
		;
	}
	async #mostPopular() {
		return this.apiClient.videos({
				params: {
					part: 'snippet',
					maxResults: 25,
					regionCode: 'kr',
					chart: 'mostPopular'
				}
			})
			.then(res => res.data.items)
		;
	}

	async relatedVideos(videoId) {
		return this.apiClient.search({
				params: {
					part: 'snippet',
					relatedToVideoId: videoId,
					type: 'video',
					regionCode: 'kr',
					maxResults: 25
				}
			})
			.then(res => res.data.items.map(item => ({...item, id: item.id.videoId})))
		;
	}

	async channelDetail(channelId) {
		return this.apiClient.channel({
				params: {
					part: 'snippet',
					id: channelId
				}
			})
			.then(res => res.data.items[0].snippet)
		;
	}
}