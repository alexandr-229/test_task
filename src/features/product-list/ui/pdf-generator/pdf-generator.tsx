import jsPDF from 'jspdf';
import { Button } from 'antd';
import { useState } from 'react';
import html2canvas from 'html2canvas';

import { PdfGeneratorProps } from './pdf-generator.props';

export const PdfGenerator = ({ disabled }: PdfGeneratorProps) => {
	const [loading, setLoading] = useState(false);

	const downloadPdf = async () => {
		try {
			const table = document.getElementById('table');
	
			if (!table) {
				return;
			}
	
			setLoading(true);
	
			const tableHeight = table.getBoundingClientRect().height;
			const file = new jsPDF('p', 'px', [(tableHeight / 1.5) + 300, 1000], true);
			const canvas = await html2canvas(table, { useCORS: true });
			const image = canvas.toDataURL('image/png');

			file.addImage(image, 'PNG', 50, 50, 900, tableHeight / 1.5, undefined, 'FAST')

			file.save('products.pdf');
		} catch(e) {
			console.log(e);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button type="primary" disabled={disabled} loading={loading} onClick={downloadPdf}>Download PDF</Button>
	);
};
