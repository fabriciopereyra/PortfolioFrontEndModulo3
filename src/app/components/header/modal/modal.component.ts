import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgbDatepickerModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],

})
export class ModalComponent {
	

	constructor(private modalService: NgbModal) {}

	open(content: any) {
		this.modalService.open(content);
	}

}
