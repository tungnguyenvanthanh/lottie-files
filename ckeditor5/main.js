const {
	ClassicEditor,
	Alignment,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	BlockToolbar,
	Bold,
	Bookmark,
	Code,
	CodeBlock,
	Emoji,
	Essentials,
	FindAndReplace,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	FullPage,
	Fullscreen,
	GeneralHtmlSupport,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Mention,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	PlainTableOutput,
	RemoveFormat,
	ShowBlocks,
	SimpleUploadAdapter,
	SourceEditing,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Style,
	Subscript,
	Superscript,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableLayout,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	WordCount
} = window.CKEDITOR;

const LICENSE_KEY = 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Nzk1ODA3OTksImp0aSI6IjcyNThiYmYyLTZiNTEtNDhmZC05MjBjLWY3ZDcyNzE2MTc5OSIsImxpY2Vuc2VkSG9zdHMiOlsidHR2bC5pby52biIsInR1bmduZ3V5ZW52YW50aGFuaC5naXRodWIuaW8iLCJ4YXlkdW5nbWllbmRvbmcudm4iXSwidXNhZ2VFbmRwb2ludCI6Imh0dHBzOi8vcHJveHktZXZlbnQuY2tlZGl0b3IuY29tIiwiZGlzdHJpYnV0aW9uQ2hhbm5lbCI6WyJjbG91ZCIsImRydXBhbCJdLCJmZWF0dXJlcyI6WyJEUlVQIiwiRTJQIiwiRTJXIiwiQk9YIl0sInZjIjoiM2Y2NDFjZTAifQ.j7TX2XIpIBNAhlvGyOzsU2h_Dx0S9BZq2Pd1ok2aabncDp2_FjOoG6vfrAhAFAUKA7Xdj7dZZt_JjgLPjiyJFg';

const uploadUrl = "https://xaydungmiendong.vn/api/files/upload-image";

const editorConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'sourceEditing',
			'showBlocks',
			'findAndReplace',
			'fullscreen',
			'|',
			'heading',
			'style',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'subscript',
			'superscript',
			'code',
			'removeFormat',
			'|',
			'emoji',
			'specialCharacters',
			'horizontalLine',
			'pageBreak',
			'link',
			'bookmark',
			'insertImage',
			'insertImageViaUrl',
			'mediaEmbed',
			'insertTable',
			'insertTableLayout',
			'highlight',
			'blockQuote',
			'codeBlock',
			'htmlEmbed',
			'|',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'outdent',
			'indent'
		],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		Alignment,
		Autoformat,
		AutoImage,
		AutoLink,
		Autosave,
		BalloonToolbar,
		BlockQuote,
		BlockToolbar,
		Bold,
		Bookmark,
		Code,
		CodeBlock,
		Emoji,
		Essentials,
		FindAndReplace,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		FullPage,
		Fullscreen,
		GeneralHtmlSupport,
		Heading,
		Highlight,
		HorizontalLine,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		MediaEmbed,
		Mention,
		PageBreak,
		Paragraph,
		PasteFromOffice,
		PlainTableOutput,
		RemoveFormat,
		ShowBlocks,
		SimpleUploadAdapter,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersArrows,
		SpecialCharactersCurrency,
		SpecialCharactersEssentials,
		SpecialCharactersLatin,
		SpecialCharactersMathematical,
		SpecialCharactersText,
		Strikethrough,
		Style,
		Subscript,
		Superscript,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableLayout,
		TableProperties,
		TableToolbar,
		TextTransformation,
		TodoList,
		Underline,
		WordCount
	],
	balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
	blockToolbar: [
		'fontSize',
		'fontColor',
		'fontBackgroundColor',
		'|',
		'bold',
		'italic',
		'|',
		'link',
		'insertImage',
		'insertTable',
		'insertTableLayout',
		'|',
		'bulletedList',
		'numberedList',
		'outdent',
		'indent'
	],
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	fullscreen: {
		onEnterCallback: container => {
			container.classList.add(
				'editor-container',
				'editor-container_classic-editor',
				'editor-container_include-style',
				'editor-container_include-block-toolbar',
				'editor-container_include-word-count',
				'editor-container_include-fullscreen',
				'main-container'
			);

			parent.postMessage({ type: 'full-screen-toggle', data: true }, '*');
		},
		onLeaveCallback: (container) => {
			parent.postMessage({ type: 'full-screen-toggle', data: false }, '*');
		}
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: 'Paragraph',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: 'Heading 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: 'Heading 2',
				class: 'ck-heading_heading2'
			},
			{
				model: 'heading3',
				view: 'h3',
				title: 'Heading 3',
				class: 'ck-heading_heading3'
			},
			{
				model: 'heading4',
				view: 'h4',
				title: 'Heading 4',
				class: 'ck-heading_heading4'
			},
			{
				model: 'heading5',
				view: 'h5',
				title: 'Heading 5',
				class: 'ck-heading_heading5'
			},
			{
				model: 'heading6',
				view: 'h6',
				title: 'Heading 6',
				class: 'ck-heading_heading6'
			}
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage'
		]
	},
	initialData: '',
	language: 'vi',
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	mention: {
		feeds: [
			{
				marker: '@',
				feed: [
					/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
				]
			}
		]
	},
	menuBar: {
		isVisible: true
	},
	placeholder: 'Nhập nội dung của bạn ở đây',
	style: {
		definitions: [
			{
				name: 'Article category',
				element: 'h3',
				classes: ['category']
			},
			{
				name: 'Title',
				element: 'h2',
				classes: ['document-title']
			},
			{
				name: 'Subtitle',
				element: 'h3',
				classes: ['document-subtitle']
			},
			{
				name: 'Info box',
				element: 'p',
				classes: ['info-box']
			},
			{
				name: 'CTA Link Primary',
				element: 'a',
				classes: ['button', 'button--green']
			},
			{
				name: 'CTA Link Secondary',
				element: 'a',
				classes: ['button', 'button--black']
			},
			{
				name: 'Marker',
				element: 'span',
				classes: ['marker']
			},
			{
				name: 'Spoiler',
				element: 'span',
				classes: ['spoiler']
			}
		]
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	},
	extraPlugins: [ CustomUploadAdapterPlugin ], // ✅ Thêm plugin custom
};

function CustomUploadAdapterPlugin(editor) {
	editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
		return new CustomUploadAdapter(loader);
	};
}

class CustomUploadAdapter {
	constructor(loader) {
		this.loader = loader;
		this.uploadUrl = uploadUrl; // đã khai báo ở trên
	}

	upload() {
		return this.loader.file
			.then(file => {
				const data = new FormData();
				data.append('upload', file);

				return fetch(this.uploadUrl, {
					method: 'POST',
					body: data
				})
				.then(response => response.json())
				.then(result => {
					// Phải trả về đúng định dạng CKEditor yêu cầu
					return {
						default: result.url
					};
				});
			});
	}

	abort() {
		// Optional: nếu muốn hủy upload giữa chừng
	}
}

window.editorInstance = null;

const allowedOrigins = [
	'https://ttvl.io.vn',
	'https://games.ttvl.io.vn',
	'https://xaydungmiendong.vn',
	'https://localhost:1001'
];

window.addEventListener('message', async (event) => {
	if (!allowedOrigins.includes(event.origin)) return; // kiểm tra bảo mật

	const { type, data } = event.data;

		if (type === 'init-editor') {
			window.initializeCKEditor();
		}
		
		if (type === 'set-content') {
			window.setContent(data.html);
		}
});

// Gắn vào window để Blazor gọi được
window.initializeCKEditor = () => {
	ClassicEditor.create(document.querySelector('#editor'), editorConfig).then(editor => {
		window.editorInstance = editor;

		const wordCount = editor.plugins.get('WordCount');
		document.querySelector('#editor-word-count').appendChild(wordCount.wordCountContainer);

		editor.model.document.on('change:data', () => {
			const data = editor.getData();
			parent.postMessage({ type: 'editor-data', data }, '*');
		});
	});
};


window.setContent = (html) => {
	var editorReady = setInterval(() => {
		if(window.editorInstance){
			clearInterval(editorReady);
			window.editorInstance.setData(html);
		}
	}, 300);
};

// Gửi thông báo cho Blazor biết đã sẵn sàng
window.addEventListener("DOMContentLoaded", () => {
	parent.postMessage({ type: 'editor-ready' }, '*');
});