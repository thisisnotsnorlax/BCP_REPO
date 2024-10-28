<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Vendor ID
                </th>
                <th scope="col" class="px-6 py-3">
                 Vendor Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Vendor Feedback
                </th>
                
            </tr>
        </thead>
        <tbody>
            <?php
                $show_reports = mysqli_query($conn, "SELECT * FROM `reports_tbl`") or die(mysqli_error($conn));
                if(mysqli_num_rows($show_reports) > 0){
                while($view = mysqli_fetch_assoc($show_reports)){   
              ?>
        
            <tr class="bg-dark border-b dark:bg-gray-800 dark:border-gray-700">
              
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <?php echo $view['vendor_id']; ?>
                </th>
                <td class="px-6 py-4">
                    <?php echo $view['vendor_name']?>
                </td>
                <td class="px-6 py-4">
                   <?php echo $view['vendor_feedback']?>
                </td>
            </tr>
            <?php
              }
            }
            ?>
        </tbody>
    </table>
</div>
