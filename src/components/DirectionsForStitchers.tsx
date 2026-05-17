import { Link } from 'react-router-dom';

const DirectionsForStitchers = () => {
  return (
    <main className="directions-page">
      <div className="container py-5">
        <h1 className="directions-heading">Directions for Stitchers</h1>

        <p className="directions-intro">
          Love Quilts USA appreciates and supports designers. We ask that our stitchers obey all
          copyright laws. These directions apply to ALL quilts and ALL squares. If you have any
          questions, please ask.
        </p>

        <div className="directions-content">
          <p>
            <strong>Fabric:</strong> WHITE, 100% cotton AIDA cloth ONLY (NO Ecru, Antique White, or Winter White)
          </p>

          <p>
            <strong>Fabric Count:</strong> 11, 14, 16 or 18 count AIDA (NO linen please)
          </p>

          <p>
            <strong>Fabric Size:</strong> 13" x 13" (app. 33x33 cm) When cutting your fabric{' '}
            <strong>do NOT include selvage</strong> in the measurement. Be sure to center your design carefully.
          </p>

          <p>
            <strong>Design Size:</strong> Stitched area can be no larger than 9 x 9" (app. 23x23 cm) and must be at
            least 6" (app. 15.24 cm) in at least one direction.
          </p>

          <p>
            <strong>Stitching: NO LONG STITCHES</strong> on your square anywhere (including your signature). If your
            pattern calls for long stitches they MUST be couched!
          </p>

          <p>
            <strong>PLEASE DO NOT USE</strong> Frixion Pens to grid your fabric. There have been instances where the
            lines have reappeared after initially disappearing.
          </p>

          <p>
            <strong>NO</strong> beads, charms or other sewn-on embellishments. Besides being a choking hazard for young
            children, they can catch on other parts of the quilt during washing and cause damage.
          </p>

          <p>
            <strong>NO</strong> religious content or references unless specifically requested by the parents.
          </p>

          <p>
            <strong>Do NOT</strong> add the child's name to your square unless that has been approved at the time you
            sign up to stitch.
          </p>

          <p>
            <strong>We STRONGLY recommend that you use ONLY color-fast thread ... DMC or an equivalent.</strong> The
            quilts are USED and washed many, many times. Possibly in hot water and with various laundry detergents. You
            don't want YOUR stitching to run and mess up not just your square but possibly the quilt.
          </p>

          <p>
            <strong>Signatures:</strong> Please sign your work when you are finished. The children and families love to
            see where the squares come from. At minimum please sign your first name and state or country abbreviation.
            This should be stitched near the design.
          </p>

          <p>
            <strong>Care:</strong> We appreciate receiving squares that have already been washed. If you need additional
            info on how to do that, please ask. Here are some basic guidelines:
          </p>

          <p>
            Pre-treat hoop marks and any other noticeable dirty spots with dishwashing detergent and a soft toothbrush.
            Dirt marks are much harder to see when the fabric is wet. Wash the square in lukewarm water with the same
            dishwashing detergent. If it's heavily soiled, let it soak a few hours or over night. Rinse three times ...
            under running water, in standing water, and again under running water. Don't ring or twist the square.
            Instead roll it in a towel. Examine your square closely in good light to make sure all dirt has been removed.
            If you still see marks or you aren't sure it's clean, DO NOT iron. Ironing will make any residual dirt
            nearly impossible to remove.
          </p>

          <p>
            After making sure all dirt is removed, place the square face down on a thick towel. Set iron on Cotton or
            Linen. Iron the back side of the square, not the front. AFTER ironing allow the square to air dry for at
            least 24 hours before packaging for mailing. The aida may feel dry after ironing but the stitched area may
            still be moist. A great way to air dry is to hang the square on a skirt hanger.
          </p>

          <p>
            <strong>ALWAYS</strong> include a note with your square. The note should include the child's name, your name
            and <strong>email address</strong>, and whether or not the square has been washed. Place the square in a
            plastic bag if you're not using a bubble envelope. This will prevent moisture from getting in the fabric.
          </p>

          <p>
            <strong>
              It's IMPORTANT to include your email address with your square in case we need to contact you.
            </strong>
          </p>

          <p>
            Even with the sign-up commitments, we seldom receive all the promised squares. PLEASE make every effort to
            fulfill your commitment to these children. Failure to do so MAY result in future signups being rejected.
          </p>

          <p>
            Occasionally we receive more squares than expected for a specific quilt. That doesn't happen often, but we
            must reserve the right to make the best quilt for the child using the squares we have. We hope you can
            understand that our loyalty is to the kids first.
          </p>

          <p>
            We will do all we can to make sure your square is placed on the child's quilt it was stitched for. But due
            to either issues with the child (such as an emergency) or with how all the squares on the quilt work
            together, we reserve the right to use your square for another child without notice.
          </p>

          <p>
            If you are able, please add $5.00 with each square to help cover the cost of assembling the quilt and
            postage to mail it to the child. DO NOT send a check made out to Love Quilts USA. We do not have a bank
            account. If you send a check, PLEASE leave the Payee line blank. We are also now accepting PayPal for your
            donations. PayPal is a secure way to send money. If you are unable to send a donation, we will still
            appreciate your stitching.
          </p>

          <p>
            This link will take you to the mailing address for the squares and also info for donating through PayPal:{' '}
            <a href="#mailing" className="directions-link">Mailing and Donations</a>
          </p>
        </div>

        <div className="mt-4">
          <Link to="/" className="directions-back">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DirectionsForStitchers;
