export function Export2Word(){
	const preHtml = "<html lang='ru' xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
	const postHtml = "</body></html>";
	const html = preHtml + document.getElementById('wordResult').innerHTML + postHtml;


	// Specify link url
	const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

	// Specify file name
	const filename = 'document.docx';

	// Create download link element
	const downloadLink = document.createElement("a");

	document.body.appendChild(downloadLink);


	// Create a link to the file
	downloadLink.href = url;

	// Setting the file name
	downloadLink.download = filename;

	//triggering the function
	downloadLink.click();

	document.body.removeChild(downloadLink);
}