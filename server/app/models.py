from django.db import models
from django.contrib.auth import get_user_model

class TicTacToeGame(models.Model):
    player_x = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='games_as_x')
    player_o = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='games_as_o')
    winner = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True, blank=True, related_name='won_games')
    board_state = models.CharField(max_length=9)  # Assuming a string representation of the board

    def __str__(self):
        return f"{self.player_x.username} vs {self.player_o.username}"
    
class Leaderboard(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    points = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} - Points: {self.points}"