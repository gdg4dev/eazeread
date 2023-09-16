const keywords = {
	news: ["news", "breaking", "report", "headline", "journalism"],
	blog: ["blog", "post", "comment", "blogger", "blogging"],
	article: ["article", "editorial", "column", "feature", "write-up"],
};

const popularSites = {
	"medium.com": "article",
    "news.vt.edu": "article",
	"dev.to": "blog",
	"nytimes.com": "news",
	"bbc.com": "news",
	"cnn.com": "news",
	// Add more popular sites and their categories as needed
};


function detectWebsiteType() {
	const url = window.location.href.toLowerCase();

	// Check if the URL is from a popular site
	for (const site in popularSites) {
		if (url.includes(site)) {
			return popularSites[site];
		}
	}

	// If not, check the URL for keywords
	for (const type in keywords) {
		for (const keyword of keywords[type]) {
			if (url.includes(keyword)) {
				return type;
			}
		}
	}

	return "unknown";
}


const summarizeText = async (url) => {
	const response = await fetch(`https://api.smmry.com/?SM_API_KEY=8E6B82B495&SM_URL=${url}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	return data;
}

const bionicReading = (text) => {
    return text.split(' ').map(word => {
      let boldChars = Math.ceil(word.length / 3);
      return `<strong>${word.slice(0, boldChars)}</strong>${word.slice(boldChars)}`;
    }).join(' ');
  }



const main = async () => {
setTimeout(async () => {
    const websiteType = detectWebsiteType();
    
    if (websiteType !== "unknown") {
        console.log(document.body.innerText)
        const summarizedText = await summarizeText(window.location.href);
        console.log(summarizedText)
        const bionicText = bionicReading(summarizedText.sm_api_content);
		document.body.innerHTML = `<p>${bionicText}</p>`;
    }
},2000 )
}


main()
