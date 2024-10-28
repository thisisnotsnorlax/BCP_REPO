<?php
    include "../connection/config.php";
?>


<div class="flex gap-4 w-full" id="dashboard">

          
<div class="bg-pink-400 w-96 h-60 rounded-md shadow  d-flex align-items-center justify-content-center fs-1 flex-column">
  
  <p class=" p-3">Total User</p>
      <?php
        $user_count = "SELECT * FROM users_tbl";
        $count_execute = mysqli_query($conn, $user_count);
        if($user_total = mysqli_num_rows($count_execute)) 
          {
          echo '<h1>'.$user_total.'</h1>';
          } elseif($user_total == 0){
              echo  '<h1>0</h1>';
          }
      ?>
</div>
<div class="bg-orange-500 w-96 h-60 rounded-md shadow "></div>
<div class="bg-green-500 w-96 h-60 shadow rounded-md d-flex align-items-center justify-content-center flex-column fs-4">
  <p class="fs-3">Pending Task</p>
      <?php
          $pending_count = "SELECT * FROM pendingtask_tbl";
          $pending_execute = mysqli_query($conn, $pending_count);
          if($pending_total = mysqli_num_rows($pending_execute)) 
            {
            echo '<h1>'.$pending_total.'</h1>';
            } elseif($pending_total == 0){
                echo  '<h1>0</h1>';
            }
        ?>
</div>
</div>