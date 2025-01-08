import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-pending-judgements',
  templateUrl: './pending-judgements.component.html',
  styleUrls: ['./pending-judgements.component.css']
})
export class PendingJudgementsComponent implements OnInit {
  pendingContracts: any[] = [];
  loading = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadPendingJudgements();
  }

  loadPendingJudgements(): void {
    this.loading = true;
    this.userService.getPendingJudgements()
      .subscribe({
        next: (contracts) => {
          this.pendingContracts = contracts;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load pending judgements';
          this.loading = false;
          console.error('Error:', error);
        }
      });
  }

  submitJudgement(contractId: number, verdict: boolean): void {
    this.userService.submitJudgement(contractId, verdict)
      .subscribe({
        next: () => {
          this.loadPendingJudgements(); // Refresh the list
        },
        error: (error) => {
          this.error = 'Failed to submit judgement';
          console.error('Error:', error);
        }
      });
  }
}